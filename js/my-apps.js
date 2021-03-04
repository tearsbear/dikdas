var app = new Framework7({
  // App root element
  root: '#app',
  // App Name
  name: 'Demo',
  theme: 'md',
  // App id
  id: 'com.demo.workshop',
  // Enable swipe panel
  panel: {
    swipe: false,
  },
  // ... other parameters
});

var mainView = app.views.create('.view-main');