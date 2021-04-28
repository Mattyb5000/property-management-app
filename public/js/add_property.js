//function event handler to handle the form contents

async function newFormHandler(event) {
    event.preventDefault();
  
    const address = document.querySelector('#property_address').value;
    // const currentTenants = document.querySelector('#current_tenants').value;
    const leaseStart = document.querySelector('#lease_start').value;
    const leaseEnd = document.querySelector('#lease_end').value;
    const sqFootage = document.querySelector('#square_footage');
    const propType = document.querySelector('#property_type');
  
    const response = await fetch(`.../add_property`, {
      method: 'POST',
      body: JSON.stringify({
        address,
        leaseStart,
        leaseEnd,
        sqFootage,
        propType,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    });
  
    if (response.ok) {""
      document.location.replace('/property_dashboard');
    } else {
      alert('Failed to add property');
    }
  }
  
  //add a property submit button
  document.querySelector('.new-property-form').addEventListener('submit', newFormHandler);
  