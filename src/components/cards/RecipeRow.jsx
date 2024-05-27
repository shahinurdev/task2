
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';


/* eslint-disable react/prop-types */
export default function RecipeRow({ recipe, onDelete }) {
  const handleDelete = async () => {
    const confirmed = window.confirm('Are you sure you want to delete this recipe?');
    if (confirmed) {
      try {
        const response = await fetch(`http://localhost:3000/recipes/${recipe.id}`, {
          method: 'DELETE',
        });
        if (response.ok) {
          onDelete(recipe.id);
        } else {
          toast.error('Failed to delete recipe. Please try again.');
        }
      } catch (error) {
        toast.error('An error occurred. Please try again.');
      }
    }
  };

  return (
    <tr>
      <th>{recipe?.id}</th>
      <td>{recipe?.title}</td>
      <td>{recipe?.price}</td>
      <td>{recipe?.category}</td>
      <td className="flex gap-4">
        <Link
          to={`/dashboard/edit-recipe/${recipe?.id}`}
          className="btn btn-xs btn-neutral"
        >
          Edit
        </Link>
        <button 
          className="btn btn-xs btn-error" 
          onClick={handleDelete}
        >
          Delete
        </button>
      </td>
    </tr>
  );
}

