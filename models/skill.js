const skills = [
    {id: 125224, skill: 'Routing', done: true},
    {id: 127905, skill: 'Show Functionality', done: true},
    {id: 139609, skill: 'Middleware', done: false}
  ];
	
  module.exports = {
    getAll,
    getOne,
    create,
    deleteOne
  };
	
  function deleteOne(id) {
    id = parseInt(id);
    const idx = skills.findIndex(skill => skill.id === id);
    skills.splice(idx, 1);
  }

  function create(skill) {
    skill.id = Date.now() % 1000000;
    skill.done = false;
    skills.push(skill);
  }

  function getAll() {
    return skills;
  }

  function getOne(id) {
    id = parseInt(id);
    return skills.find((skill) => skill.id === id);
  }