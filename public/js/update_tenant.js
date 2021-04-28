//update tenant submit button

//function event handler to handle the form contents

async function editFormHandler(event) {
    event.preventDefault();
    const tenantFirstName = document.querySelector('#tenant_first_name').value;
    const tenantLastName = document.querySelector('#tenant_last_name').value;
    const phone = document.querySelector('#tenant_phone').value;
    const emerContact = document.querySelector('#emergency_contact').value;
  
  // window.location gives us access to the URL. We then use the .split() method to access the number at the end of the URL and set that equal to id.
    const id = window.location.toString().split('/')[
      window.location.toString().split('/').length - 1
    ];
  
    const response = await fetch(`/api/update_tenant/${id}`, {
      method: 'PUT',
      body: JSON.stringify({
        tenantFirstName,
        tenantLastName,
        phone,
        emerContact,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    });
  
    if (response.ok) {
      document.location.replace(`/api/update_tenant/${id}`);
    } else {
      alert('Failed to edit tenant');
    }
  }
  
  document.querySelector('#update_tenants').addEventListener('submit', editFormHandler);