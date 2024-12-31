# Express.js API Server

This project is an API server built with Express.js to manage and retrieve data about teams (`equipes`) and countries. The server uses JSON files for data storage and supports operations like fetching, updating, and redirecting.

---

---

### Teams API
#### **`GET /api/equipes`**
- **Description**: Retrieves all teams from the `equipe.json` file.
- **Response**: Array of team objects in JSON format.

#### **`GET /api/equipes/:id`**
- **Description**: Retrieves a specific team by its ID.
- **Parameters**:
- `id` (path parameter): The ID of the team.
- **Responses**:
- Status `200`: Returns the team object if found.
- Status `404`: Returns an error message if the team is not found.
  ```json
  { "message": "Team not found" }
  ```

#### **`POST /api/equipes/:id`**
- **Description**: Updates a team's information by its ID.
- **Parameters**:
- `id` (path parameter): The ID of the team.
- **Body**: JSON object containing the updated team data.
- **Behavior**:
- Updates the team in `equipe.json`.
- Redirects to `GET /api/equipes/:id` to view the updated team.
- **Example Request Body**:
```json
{
  "name": "Updated Team Name",
  "city": "Updated City"
}
