const userAction = async () => {
    const response = await fetch('www.example.com/api/get/1', {
      method: 'POST',
      body: myBody, 
      headers: {
        'Content-Type': 'application/json'
      }
    });
    const myJson = await response.json(); 
  }