//add a property submit button

//function event handler to handle the form contents

async function newFormHandler(event) {
    event.preventDefault();
  
    const address = document.querySelector('#property_address').value;
    const currentTenants = document.querySelector('#current_tenants').value;
    const leaseTerm = document.querySelector('#lease_term').value;
    const sqFootage = document.querySelector('#square_footage');
    const propType = document.querySelector('#property_type');
  
    const response = await fetch(`.../add_property`, {
      method: 'POST',
      body: JSON.stringify({
        ,
        description,
        guest_name,
        has_nuts,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    });
  
    if (response.ok) {
      document.location.replace('/');
    } else {
      alert('Failed to add dish');
    }
  }
  
  document.querySelector('.new-dish-form').addEventListener('submit', newFormHandler);
  