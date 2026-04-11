async function test() {
  console.log("Testing POST login...");
  const login = await fetch('http://localhost:5000/api/login', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ username: 'admin', password: 'dwangwa123' })
  });
  const { token } = await login.json();

  console.log("Attempting to POST new gallery item...");
  try {
      const resPost = await fetch(`http://localhost:5000/api/gallery`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({ title: 'Brand New Photo', imageUrl: '/uploads/new.jpg' })
      });
      
      console.log("Status:", resPost.status);
      console.log("Response text:", await resPost.text());
  } catch (e) {
      console.log("FETCH ERROR", e);
  }
}

test();
