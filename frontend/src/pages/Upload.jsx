async function handleUpload() {
  const formData = new FormData();
  formData.append('photo', file); // 'photo' ต้องตรงกับชื่อ field ใน multer

  const res = await fetch('/api/photos/upload', {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${localStorage.getItem('token')}`,
    },
    body: formData,
  });

  const result = await res.json();
  console.log(result);
}
