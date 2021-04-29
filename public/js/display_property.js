//update tenants button function
const updateButtonHandler = async (event) => {
    event.preventDefault();
  
    const landlord = document.querySelector('#').value.trim();
    const tenantFirstName = document.querySelector('#tenant_first_name').value;
    const tenantLastName = document.querySelector('#tenant_last_name').value;
    const phone = document.querySelector('#tenant_phone').value;
    const emerContact = document.querySelector('#emergency_contact').value;
  
    if (tenantFirstName && tenantLastName && phone && emerContact) {
      const response = await fetch(`/api/tenant`, {
        method: 'POST',
        body: JSON.stringify({ tenantFirstName, tenantLastName, phone, emerContact }),
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      if (response.ok) {
        document.location.replace('/view_tenant');
      } else {
        alert('Failed to create project');
      }
    }
  };
  
  const delButtonHandler = async (event) => {
    if (event.target.hasAttribute('data-id')) {
      const id = event.target.getAttribute('data-id');
  
      const response = await fetch(`/api/projects/${id}`, {
        method: 'DELETE',
      });
  
      if (response.ok) {
        document.location.replace('/profile');
      } else {
        alert('Failed to delete project');
      }
    }
  };

//come back to this function

  

//view tenants button function

const newFormHandler = async (event) => {
    event.preventDefault();
  
    const name = document.querySelector('#project-name').value.trim();
    const needed_funding = document.querySelector('#project-funding').value.trim();
    const description = document.querySelector('#project-desc').value.trim();
  
    if (name && needed_funding && description) {
      const response = await fetch(`/api/projects`, {
        method: 'POST',
        body: JSON.stringify({ name, needed_funding, description }),
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      if (response.ok) {
        document.location.replace('/profile');
      } else {
        alert('Failed to create project');
      }
    }
  };
  
  const delButtonHandler = async (event) => {
    if (event.target.hasAttribute('data-id')) {
      const id = event.target.getAttribute('data-id');
  
      const response = await fetch(`/api/projects/${id}`, {
        method: 'DELETE',
      });
  
      if (response.ok) {
        document.location.replace('/profile');
      } else {
        alert('Failed to delete project');
      }
    }
  };
  
  document
    .querySelector('#updateTenantsButton')
    .addEventListener('click', updateButtonHandler);
  
  document
    .querySelector('#viewTenantsButton')
    .addEventListener('click', viewButtonHandler);
  