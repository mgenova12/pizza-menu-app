# Pizza Menu App

Pizza Menu App is a Single Page Appliaction online menu for a fictional pizzeria in React

# Motivation
  
  This app takes the traditional menu and makes it interactive and fun to view. I decided to choose a simplistic design to display each image and title. The ability to expand click makes it easier for the user to view the description of each pizza. Users can also navigate to each individual pizza page for more information about that specific product.  

# Tech

Pizza Menu App uses a number of open source projects to work properly:

* [Create-React-App] - An officially supported way to create single-page React applications. It offers a modern build setup with no configuration.
* [Material-UI] - MIT-licensed open source project that features React components that implement Google's Material Design
* [React-Router-Dom] - A routing library built on top of the react which is used to create the routing in react apps

# Screenshots

![alt text](https://raw.githack.com/mgenova12/pizza-menu-app/master/src/imgs/pizza-menu-ss.jpg)

# Features

* Listing Page that displays 5 pizzas
* Each Pizza has its own unique discription page
* Expand click description for each pizza
* Ability to favorite pizzas
* Responsive Grid System


# Code Example

**Using React Router To Render Component and pass prop based on ID**
```javascript
  <Route path="/:id" render={(props) => (
    <PizzaDescription pizza={Pizzas.find(pizza => pizza.id === parseInt(props.match.params.id))}/>
  )}/> 
```



   [Create-React-App]: <https://github.com/facebook/create-react-app/>
   [Material-UI]: <https://material-ui.com//>
   [React-Router-Dom]: <https://www.npmjs.com/package/react-router-dom/>

   
   
   

