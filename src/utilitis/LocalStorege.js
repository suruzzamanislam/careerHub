const checkLocalStorege = () => {
  const stored = localStorage.getItem('jobApplications');
  if (stored) {
    return JSON.parse(stored);
  }
  return [];
};

const saveData = id => {
  const idStr = JSON.stringify(id);
  localStorage.setItem('jobApplications', idStr);
};

const addLocal = id => {
  const localData = checkLocalStorege();
  const checkId = localData.find(jobId => jobId == id);
  if (!checkId) {
    localData.push(id);
  }
  saveData(localData);
};

export { addLocal, checkLocalStorege };
