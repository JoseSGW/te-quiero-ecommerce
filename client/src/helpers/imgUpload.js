export const imgUpload = async (file) => {
  const cloudUrl = 'https://api.cloudinary.com/v1_1/dwqr4s7gp/upload';
  const formData = new FormData();
  
  formData.append('upload_preset', 'tea-ecommerce');
  formData.append('file', file);

  try {
    const resp = await fetch(cloudUrl, {
      method: 'POST',
      body: formData
    })

    if(resp.ok) {
      const cloudResp = await resp.json();
      return cloudResp.secure_url;
    } else {
      throw await resp.json();
    }

  } catch (error) {
    throw error;
  }
}