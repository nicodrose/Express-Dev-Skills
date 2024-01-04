const skills = [
    {id: 125224, skill: 'Routing', done: true},
    {id: 127905, skill: 'Show Functionality', done: true},
    {id: 139609, skill: 'Middleware', done: false}
  ];
	
  module.exports = {
    getAll,
    getOne
  };
	
  function getAll() {
    return skills;
  }

  function getOne(id) {
    id = parseInt(id);
    return skills.find((skill) => skill.id === id);
  }