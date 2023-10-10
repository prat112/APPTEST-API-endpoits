![Screenshot (276)](https://github.com/prat112/APPTEST-API-endpoits/assets/73698790/c85d77f8-9117-456b-8791-84b1c825bc50)# APPTEST-API-endpoits
To test the API endpoints you created using Postman, follow these steps:

GET Method: Retrieve Data

Open Postman.
Set the request type to GET.
Enter the URL: http://localhost:3000/api/items.
Click "Send".
Postman will display the response from the server containing the existing data.

POST Method: Add New Item

Set the request type to POST.
Enter the URL: http://localhost:3000/api/items.
In the Body tab, select "raw" and choose JSON (application/json).
Enter the JSON payload for the new item, for example:
{
  "id": 4,
  "name": "New Item"
}
Click "Send".
Postman will display the response from the server, confirming the addition of the new item.
DELETE Method: Remove Item

Set the request type to DELETE.
Enter the URL for the item you want to delete, for example: http://localhost:3000/api/items/4 (assuming the item ID is 4).
Click "Send".
Postman will display a success message (Status: 204 No Content) indicating that the item has been successfully deleted.
By using Postman to send requests to your API, you can test each endpoint and verify their functionality.




GET REQUEST:
![Screenshot (314)](https://github.com/prat112/APPTEST-API-endpoits/assets/73698790/78ed4196-36d0-4eb7-afb9-b1e869edc1d2)

POST REQUEST:
![Screenshot (315)](https://github.com/prat112/APPTEST-API-endpoits/assets/73698790/6c67f7b2-3348-40d7-9671-31c5de62c818)

DELETE REQUEST:


![Screenshot (313)](https://github.com/prat112/APPTEST-API-endpoits/assets/73698790/cefe19a7-1f46-4b84-a930-c309b8414ac4)










