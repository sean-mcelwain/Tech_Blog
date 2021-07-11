const updateFormHandler = async (event) => {
  event.preventDefault();

  const name = document.querySelector('#post-name').value.trim();
  const description = document.querySelector('#post-desc').value.trim();
  const id = document.querySelector('.updateBtn').getAttribute('data-id');

  if (name && description) {
    const response = await fetch(`/api/posts/${id}`, {
      method: 'PUT',
      body: JSON.stringify({ name, description }),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (response.ok) {
      document.location.replace('/');
    } else {
      alert('Failed to update post');
    }
  }
};

document
.querySelector('.update-post-form')
  .addEventListener('submit', updateFormHandler);
