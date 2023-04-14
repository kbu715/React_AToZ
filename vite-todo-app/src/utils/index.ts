function setLocalStorage(key: string, data: any): void {
  localStorage.setItem(key, JSON.stringify(data));
}

function getLocalStorage(key: string): TodoData[] {
  const data = localStorage.getItem(key);
  if (data) {
    return JSON.parse(data);
  }
  return [];
}

export { setLocalStorage, getLocalStorage };
