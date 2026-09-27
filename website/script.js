'use strict';
const filterRow = document.querySelector('.filter-row');
const filters = [...document.querySelectorAll('[data-filter]')];
const projects = [...document.querySelectorAll('.project')];
const count = document.querySelector('#project-count');
filterRow.hidden = false;
filters.forEach(button => {
  button.addEventListener('click', () => {
    const category = button.dataset.filter;
    filters.forEach(filter => filter.setAttribute('aria-pressed', String(filter === button)));
    let visible = 0;
    projects.forEach(project => {
      project.hidden = category !== 'all' && project.dataset.category !== category;
      if (!project.hidden) visible++;
    });
    count.textContent = `${visible} ${visible === 1 ? 'project' : 'projects'}`;
  });
});
