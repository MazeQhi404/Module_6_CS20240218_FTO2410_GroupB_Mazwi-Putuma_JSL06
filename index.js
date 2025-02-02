// Sample menu data (Consider fetching this data from a server in a real-world scenario)
const menu = {
    Starters: ["Garlic Bread", "Bruschetta"],
    MainCourses: ["Margherita Pizza", "Spaghetti Carbonara"],
    Desserts: ["Tiramisu", "Cheesecake"]
};

// Function to display menu items by category
function displayMenuItems(menu) {
    // Get the menu container element from the HTML
    const menuSection = document.getElementById('menu');

    // Loop through each category and its items in the menu object
    for (const [category, items] of Object.entries(menu)) {

     // Create an element to represent the category
        const categoryElement = document.createElement('h3');

        // Set the text content of the category element to the category name
        categoryElement.textContent = category;

        // Append the category element to the menu container
        menuSection.appendChild(categoryElement);

        // Create an element to represent a list of items
        const categoryListEl = document.createElement('ul');
        const itemsList = document.createElement('li');
        itemsList.textContent = items;
        categoryListEl.appendChild(itemsList);

        // Append a list of items element to the menu container
        menuSection.appendChild(categoryListEl);

        // Loop through the items in the category and create list items
        items.forEach(item => {

            // Create a list item element
            const itemsList = document.createElement('li');

            // Set the text content of the list item element to the item name
            itemsList.textContent = items;

            // Attach a click event listener to the list item to add it to the order
            itemsList.addEventListener('click', () => {

                  // Append the list item to the list of items
                  menuSection.appendChild(itemsList);
            });
        });
    }
              
}

// Callback function for adding an item to the order
function addToOrder(itemsName) {
    // Get the order items list and the order total element from the HTML
    const orderItemsList = document.getElementById('order-items');
    const orderTotal = document.getElementById('order-total');



    // Create a list item for the order
    const orderList = document.createElement('li');

    // Set the text content of the list item to the item name
    orderList.textContent = itemsName ;

    // Append the list item to the order items list
    orderItemsList.appendChild(orderList);


    // Calculate and update the total price
    const currentTotal = parseFloat(orderTotal);
    const itemPrice = 100 ;
    const newTotal = currentTotal + itemPrice ;


    // Update the text content of the order total element with the new total
    orderTotal.textContent = newTotal.toFixed(2);

}

// Function to initialize the menu system
function initMenuSystem(menu) {
    // Call the function to display menu items
    displayMenuItems(menu);
}

// Start the menu system by calling the init function
initMenuSystem(menu);
