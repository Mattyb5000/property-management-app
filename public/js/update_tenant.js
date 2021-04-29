//function event handler to handle the form contents

const updateTenantFormHandler = async (event) => {
    event.preventDefault();

    const first_name = document.querySelector('#tenant_first_name').value;
    const last_name = document.querySelector('#tenant_last_name').value;
    const phone_number = document.querySelector('#tenant_phone').value;
    const emerContact = document.querySelector('#emergency_contact').value;
    //or querySelector tenant id from handlebars pg.
  
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
      //redirect to `/view_tenant/${id}`
      document.location.replace(`/view_tenant/${id}`);
    } else {
      alert('Failed to edit tenant');
    }
  }
  
  //calls in #update_tenant submit button
  document.querySelector('#update_tenant').addEventListener('submit', updateTenantFormHandler);