function selectCity(city) {
  document.getElementById("cityInput").value = city;
  document.getElementById("cityDropdown").classList.remove("show");
}

function showCityDropdown() {
  var dropdown = document.getElementById("cityDropdown");
  if (!dropdown.classList.contains("show")) {
    dropdown.classList.add("show");
  }
}

function filterCities() {
  var input, filter, div, a, i;
  input = document.getElementById("cityInput");
  filter = input.value.toUpperCase();
  div = document.getElementById("cityDropdown");
  a = div.getElementsByTagName("a");

  if (filter.length > 0) {
    div.classList.add("show");
  } else {
    div.classList.remove("show");
  }

  for (i = 0; i < a.length; i++) {
    txtValue = a[i].textContent || a[i].innerText;
    if (txtValue.toUpperCase().indexOf(filter) > -1) {
      a[i].style.display = "";
    } else {
      a[i].style.display = "none";
    }
  }
}

function performSearch() {
  var city = document.getElementById("cityInput").value;
  var query = document.getElementById("searchInput").value;
  alert("Searching for: " + query + " in " + city);
}

function toggleSearchBar() {
  var searchContainer = document.getElementById("searchContainer");
  searchContainer.classList.toggle("active");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function (event) {
  if (!event.target.matches("#cityInput")) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    for (var i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains("show")) {
        openDropdown.classList.remove("show");
      }
    }
  }
};

$("#carousel1").owlCarousel({
  loop: true,
  margin: 10,
  nav: true,
  dots: false,
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 2,
    },
    1000: {
      items: 3,
    },
  },
});

$("#carousel2").owlCarousel({
  loop: true,
  margin: 10,
  nav: true,
  dots: false,
  responsive: {
    0: {
      items: 3,
    },
    600: {
      items: 4,
    },
    1000: {
      items: 9,
    },
  },
});

$("#carousel3").owlCarousel({
  loop: true,
  margin: 10,
  nav: true,
  dots: false,
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 2,
    },
    1000: {
      items: 4,
    },
  },
});
