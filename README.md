# keypoints of cloudinary 

- ###  if we directly upload image to cloudinary with onChange function at input, do not set  state(it will be empty first time and then will get previous image always as you will upload next image).
- ### directly upload the image to cloudinary by formdata without setting state.
- ### after uploading image the url can be seen in res.data.url(is this way pass only res in .then function like .then((res)=>{console.log(res.data.url)}))
- ###  save the res.data.url to state and render where you want 
