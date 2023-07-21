const books = [
    {
    title: "Watchmen",
    author: "Alan Moore",
    genre: "Comics",
    publishDate: "September 1986 - October 1987",
    image: "image/watchmen.jpg"
  },
  {
    title: "Maus",
    author: "Art Spiegelman",
    genre: "Comics",
    publishDate: "1980 - 1991",
    image: "image/maus.jpg"
  },
  {
    title: "Batman: The Dark Knight Returns",
    author: "Frank Miller",
    genre: "Comics",
    publishDate: "February - June 1986",
    image: "image/thedarkknightreturns.jpg"
  },
  
  {
    title: "Blankets",
    author: "Craig Thompson",
    genre: "Comics",
    publishDate: "August 2003",
    image: "image/blankets.jpg"
  },
  {
    title: "The Walking Dead",
    author: "Robert Kirkman",
    genre: "Comics",
    publishDate: "October 2003 - July 2019",
    image: "image/thewalkingdead.jpg"
  },
  {
    title: "Persepolis",
    author: "Marjane Satrapi",
    genre: "Comics",
    publishDate: "2000 - 2003",
    image: "image/persepolis.jpg"
  },
  {
    title: "Saga",
    author: "Brian K. Vaughan",
    genre: "Comics",
    publishDate: "March 2012 - present",
    image: "image/saga.jpg"
  },
  {
    title: "Sandman",
    author: "Neil Gaiman",
    genre: "Comics",
    publishDate: "January 1989 - March 1996",
    image: "image/sandman.jpg"
  },
  {
    title: "X-Men: The Dark Phoenix Saga",
    author: "Chris Claremont",
    genre: "Comics",
    publishDate: "January - October 1980",
    image: "image/xmendarkphoenixsaga.jpg"
  },
  {
    title: "Fun Home: A Family Tragicomic",
    author: "Alison Bechdel",
    genre: "Comics",
    publishDate: "June 8, 2006",
    image: "image/funhome.jpg"
  },
  
  {
    title: "Preacher",
    author: "Garth Ennis",
    genre: "Comics",
    publishDate: "April 1995 - October 2000",
    image: "image/preacher.jpg"
  },
  
  {
    title: "Hellboy",
    author: "Mike Mignola",
    genre: "Comics",
    publishDate: "March 1994 - September 2016",
    image: "image/hellboy.jpg"
  },
  {
    title: "V for Vendetta",
    author: "Alan Moore",
    genre: "Comics",
    publishDate: "March - May 1988",
    image: "image/vendetta.jpg"
  },
  {
    title: "Y: The Last Man",
    author: "Brian K. Vaughan",
    genre: "Comics",
    publishDate: "September 2002 - March 2008",
    image: "image/ythelastman.jpg"
  },
  {
    title: "Locke & Key",
    author: "Joe Hill",
    genre: "Comics",
    publishDate: "February 2008 - December 2013",
    image: "image/lockeandkey.jpg"
  },
  {
    title: "Astro City",
    author: "Kurt Busiek",
    genre: "Comics",
    publishDate: "August 1995 - present",
    image: "image/astrocity.jpg"
  },
  {
    title: "Scott Pilgrim",
    author: "Bryan Lee O'Malley",
    genre: "Comics",
    publishDate: "August 2004 - July 2010",
    image: "image/scottpilgrims.jpg"
  },
  {
    title: "Fables",
    author: "Bill Willingham",
    genre: "Comics",
    publishDate: "July 2002 - July 2015",
    image: "image/fables.jpg"
  },
  {
    title: "Ms. Marvel",
    author: "G. Willow Wilson",
    genre: "Comics",
    publishDate: "February 2014 - August 2019",
    image: "image/msmarvel.jpg"
  },
  {
    title: "Black Hammer",
    author: "Jeff Lemire",
    genre: "Comics",
    publishDate: "July 2016 - present",
    image: "image/blackhammer.jpg"
  },



  {
    title: "Gone Girl",
    author: "Gillian Flynn",
    genre: "Thriller",
    publishDate: "May 24, 2012",
    image: "image/gonegirl.jpg"
  },
  {
    title: "The Girl with the Dragon Tattoo",
    author: "Stieg Larsson",
    genre: "Thriller",
    publishDate: "August 2005",
    image: "image/dragontattoo.jpg"
  },
  {
    title: "The Da Vinci Code",
    author: "Dan Brown",
    genre: "Thriller",
    publishDate: "March 18, 2003",
    image: "image/thedavincicode.jpg"
  },
  {
    title: "The Silence of the Lambs",
    author: "Thomas Harris",
    genre: "Thriller",
    publishDate: "May 1, 1988",
    image: "image/silenceof thelambs.jpg"
  },
  {
    title: "The Girl on the Train",
    author: "Paula Hawkins",
    genre: "Thriller",
    publishDate: "January 13, 2015",
    image: "image/thegirlonthetrain.jpg"
  },
  {
    title: "The Silent Patient",
    author: "Alex Michaelides",
    genre: "Thriller",
    publishDate: "February 5, 2019",
    image: "image/silentpatient.jpg"
  },
  {
    title: "Sharp Objects",
    author: "Gillian Flynn",
    genre: "Thriller",
    publishDate: "September 26, 2006",
    image: "image/sharpobjects.jpg"
  },
  {
    title: "Before I Go to Sleep",
    author: "S.J. Watson",
    genre: "Thriller",
    publishDate: "June 14, 2011",
    image: "image/beforeigotosleep.jpg"
  },
  {
    title: "The Reversal",
    author: "Michael Connelly",
    genre: "Thriller",
    publishDate: "October 5, 2010",
    image: "image/thereversal.jpg"
  },
  {
    title: "Misery",
    author: "Stephen King",
    genre: "Thriller",
    publishDate: "June 8, 1987",
    image: "image/misery.jpg"
  },
  {
    title: "The Woman in the Window",
    author: "A.J. Finn",
    genre: "Thriller",
    publishDate: "January 2, 2018",
    image: "image/thewomaninthewindow.jpg"
  },
  {
    title: "The Firm",
    author: "John Grisham",
    genre: "Thriller",
    publishDate: "February 1, 1991",
    image: "image/thefirm.jpg"
  },
  {
    title: "In the Woods",
    author: "Tana French",
    genre: "Thriller",
    publishDate: "May 17, 2007",
    image: "image/inthewoods.jpg"
  },
  {
    title: "Before We Were Strangers",
    author: "Renée Carlino",
    genre: "Thriller",
    publishDate: "August 18, 2015",
    image: "image/beforewewerestrangers.jpg"
  },
  {
    title: "The Couple Next Door",
    author: "Shari Lapena",
    genre: "Thriller",
    publishDate: "July 14, 2016",
    image: "image/thecouplenextdoor.jpg"
  },
  {
    title: "I Am Watching You",
    author: "Teresa Driscoll",
    genre: "Thriller",
    publishDate: "October 1, 2017",
    image: "image/iamwatchingyou.jpg"
  },
  {
    title: "Behind Closed Doors",
    author: "B.A. Paris",
    genre: "Thriller",
    publishDate: "February 11, 2016",
    image: "image/behindcloseddoors.jpg"
  },
  {
    title: "Shutter Island",
    author: "Dennis Lehane",
    genre: "Thriller",
    publishDate: "April 15, 2003",
    image: "image/shutterislandbook.jpg"
  },
  {
    title: "Before I Let You In",
    author: "Jenny Blackhurst",
    genre: "Thriller",
    publishDate: "October 20, 2016",
    image: "image/beforeiletyouin.jpg"
  },
  {
    title: "The Silent Wife",
    author: "A.S.A. Harrison",
    genre: "Thriller",
    publishDate: "June 25, 2013",
    image: "image/thesilentwife.jpg"
  },



  {
    title: "Pride and Prejudice",
    author: "Jane Austen",
    genre: "Romance",
    publishDate: "January 28, 1813",
    image: "image/prideandprejudice.jpg"
  },
  {
    title: "Outlander",
    author: "Diana Gabaldon",
    genre: "Romance",
    publishDate: "June 1, 1991",
    image: "image/outlander.jpg"
  },
  {
    title: "The Hating Game",
    author: "Sally Thorne",
    genre: "Romance",
    publishDate: "August 9, 2016",
    image: "image/thehatinggame.jpg"
  },
  {
    title: "Me Before You",
    author: "Jojo Moyes",
    genre: "Romance",
    publishDate: "January 5, 2012",
    image: "image/mebeforeyou.jpg"
  },
  {
    title: "The Notebook",
    author: "Nicholas Sparks",
    genre: "Romance",
    publishDate: "October 1, 1996",
    image: "image/thenotebook.jpg"
  },
  {
    title: "Red, White & Royal Blue",
    author: "Casey McQuiston",
    genre: "Romance",
    publishDate: "May 14, 2019",
    image: "image/redwhiteroyalblue.jpg"
  },
  {
    title: "The Kiss Quotient",
    author: "Helen Hoang",
    genre: "Romance",
    publishDate: "May 30, 2018",
    image: "image/thekissquotient.jpg"
  },
  {
    title: "It Ends with Us",
    author: "Colleen Hoover",
    genre: "Romance",
    publishDate: "August 2, 2016",
    image: "image/itendswithus.jpg"
  },
  {
    title: "The Rosie Project",
    author: "Graeme Simsion",
    genre: "Romance",
    publishDate: "October 1, 2013",
    image: "image/therosieproject.jpg"
  },
  {
    title: "The Bridges of Madison County",
    author: "Robert James Waller",
    genre: "Romance",
    publishDate: "April 28, 1992",
    image: "image/thebridgesofmandisoncounty.jpg"
  },
  



  {
    title: "Dracula",
    author: "Bram Stoker",
    genre: "Horror",
    publishDate: "May 26, 1897",
    image: "image/dracula.jpg"
  },
  {
    title: "Frankenstein",
    author: "Mary Shelley",
    genre: "Horror",
    publishDate: "January 1, 1818",
    image: "image/frankenstein.jpg"
  },
  {
    title: "The Shining",
    author: "Stephen King",
    genre: "Horror",
    publishDate: "January 28, 1977",
    image: "image/theshining.jpg"
  },
  {
    title: "The Haunting of Hill House",
    author: "Shirley Jackson",
    genre: "Horror",
    publishDate: "October 16, 1959",
    image: "image/thehauntingofthehillhouse.jpg"
  },
  {
    title: "The Exorcist",
    author: "William Peter Blatty",
    genre: "Horror",
    publishDate: "August 5, 1971",
    image: "image/theexorcist.jpg"
  },
  {
    title: "Pet Sematary",
    author: "Stephen King",
    genre: "Horror",
    publishDate: "November 14, 1983",
    image: "image/petsematary.jpg"
  },
  {
    title: "House of Leaves",
    author: "Mark Z. Danielewski",
    genre: "Horror",
    publishDate: "March 7, 2000",
    image: "image/houseofleaves.jpg"
  },
  {
    title: "Ghost Story",
    author: "Peter Straub",
    genre: "Horror",
    publishDate: "January 1, 1979",
    image: "image/ghoststories.jpg"
  },
  {
    title: "Bird Box",
    author: "Josh Malerman",
    genre: "Horror",
    publishDate: "March 1, 2014",
    image: "image/birdbox.jpg"
  },
  {
    title: "Rosemary's Baby",
    author: "Ira Levin",
    genre: "Horror",
    publishDate: "March 12, 1967",
    image: "image/rosemarysbaby.jpg"
  },
  {
    title: "The Silence of the Lambs",
    author: "Thomas Harris",
    genre: "Horror",
    publishDate: "May 1, 1988",
    image: "image/thesilenceofthelambs.jpg"
  },
  {
    title: "American Psycho",
    author: "Bret Easton Ellis",
    genre: "Horror",
    publishDate: "March 1991",
    image: "image/amerricanpsycho.jpg"
  },
  {
    title: "Coraline",
    author: "Neil Gaiman",
    genre: "Horror",
    publishDate: "August 4, 2002",
    image: "image/coraline.jpg"
  },
  {
    title: "NOS4A2",
    author: "Joe Hill",
    genre: "Horror",
    publishDate: "April 30, 2013",
    image: "image/nos4a2.jpg"
  },
  



  {
    title: "Sapiens: A Brief History of Humankind",
    author: "Yuval Noah Harari",
    genre: "History",
    publishDate: "February 10, 2015",
    image: "image/sapiens.jpg"
  },
  {
    title: "The Guns of August",
    author: "Barbara W. Tuchman",
    genre: "History",
    publishDate: "September 3, 1962",
    image: "image/thegunsofaugust.jpg"
  },
  {
    title: "The Rise and Fall of the Third Reich",
    author: "William L. Shirer",
    genre: "History",
    publishDate: "October 17, 1960",
    image: "image/riseandfall.jpg"
  },
  {
    title: "1491: New Revelations of the Americas Before Columbus",
    author: "Charles C. Mann",
    genre: "History",
    publishDate: "August 9, 2005",
    image: "image/1491.jpg"
  },
  {
    title: "The Wright Brothers",
    author: "David McCullough",
    genre: "History",
    publishDate: "May 5, 2015",
    image: "image/wrightbrothers.jpg"
  },
  {
    title: "Band of Brothers",
    author: "Stephen E. Ambrose",
    genre: "History",
    publishDate: "June 1, 1992",
    image: "image/bandofbrothers.jpg"
  },
  {
    title: "The Diary of a Young Girl",
    author: "Anne Frank",
    genre: "History",
    publishDate: "June 25, 1947",
    image: "image/annefrank.jpg"
  },
  {
    title: "1776",
    author: "David McCullough",
    genre: "History",
    publishDate: "May 24, 2005",
    image: "image/1776.jpg"
  },
  {
    title: "A People's History of the United States",
    author: "Howard Zinn",
    genre: "History",
    publishDate: "1980",
    image: "image/peopleshistory.jpg"
  },
  {
    title: "Guns, Germs, and Steel: The Fates of Human Societies",
    author: "Jared Diamond",
    genre: "History",
    publishDate: "March 1, 1997",
    image: "image/gunsgermsandsteel.jpg"
  },
  


  {
    title: "A Brief History of Time",
    author: "Stephen Hawking",
    genre: "Time",
    publishDate: "September 1, 1988",
    image: "image/briefhistoryoftime.jpg"
  },
  {
    title: "Einstein: His Life and Universe",
    author: "Walter Isaacson",
    genre: "Time",
    publishDate: "April 10, 2007",
    image: "image/einstein.jpg"
  },
  {
    title: "The Time Traveler's Wife",
    author: "Audrey Niffenegger",
    genre: "Time",
    publishDate: "September 1, 2003",
    image: "image/timetravelerswife.jpg"
  },
  {
    title: "From Eternity to Here: The Quest for the Ultimate Theory of Time",
    author: "Sean Carroll",
    genre: "Time",
    publishDate: "January 5, 2010",
    image: "image/frometernitytohere.jpg"
  },
  {
    title: "The Fabric of the Cosmos: Space, Time, and the Texture of Reality",
    author: "Brian Greene",
    genre: "Time",
    publishDate: "February 8, 2005",
    image: "image/frabicofcosmos.jpg"
  },
  {
    title: "Time Reborn: From the Crisis in Physics to the Future of the Universe",
    author: "Lee Smolin",
    genre: "Time",
    publishDate: "April 23, 2013",
    image: "image/timereborn.jpg"
  },
  {
    title: "The Order of Time",
    author: "Carlo Rovelli",
    genre: "Time",
    publishDate: "April 24, 2018",
    image: "image/orderoftime.jpg"
  },
  {
    title: "Time Travel: A History",
    author: "James Gleick",
    genre: "Time",
    publishDate: "September 27, 2016",
    image: "image/timetravelerahistory.jpg"
  },
  {
    title: "Black Holes and Time Warps: Einstein's Outrageous Legacy",
    author: "Kip S. Thorne",
    genre: "Time",
    publishDate: "February 1, 1994",
    image: "image/blackholes.jpg"
  },
  {
    title: "The Time Machine",
    author: "H.G. Wells",
    genre: "Time",
    publishDate: "May 7, 1895",
    image: "image/timemachine.jpg"
  },



  {
    title: "The Godfather",
    author: "Mario Puzo",
    genre: "Movie",
    publishDate: "March 10, 1969",
    image: "image/thegodfather.jpg"
  },
  {
    title: "Jurassic Park",
    author: "Michael Crichton",
    genre: "Movie",
    publishDate: "November 20, 1990",
    image: "image/jurassicpark.jpg"
  },
  {
    title: "The Lord of the Rings",
    author: "J.R.R. Tolkien",
    genre: "Movie",
    publishDate: "July 29, 1954",
    image: "image/lordoftherings.jpg"
  },
  {
    title: "Harry Potter and the Sorcerer's Stone",
    author: "J.K. Rowling",
    genre: "Movie",
    publishDate: "June 26, 1997",
    image: "image/harrypotter.jpg"
  },
  {
    title: "Forrest Gump",
    author: "Winston Groom",
    genre: "Movie",
    publishDate: "September 1986",
    image: "image/forestgump.jpg"
  },
  {
    title: "The Martian",
    author: "Andy Weir",
    genre: "Movie",
    publishDate: "February 11, 2014",
    image: "image/martian.jpg"
  },
  {
    title: "The Shawshank Redemption",
    author: "Stephen King",
    genre: "Movie",
    publishDate: "September 1, 1982",
    image: "image/shawshank.jpg"
  },
  {
    title: "Fight Club",
    author: "Chuck Palahniuk",
    genre: "Movie",
    publishDate: "August 17, 1996",
    image: "image/fightclub.jpg"
  },
  {
    title: "The Chronicles of Narnia: The Lion, the Witch and the Wardrobe",
    author: "C.S. Lewis",
    genre: "Movie",
    publishDate: "October 16, 1950",
    image: "image/narnia.jpg"
  },
  {
    title: "The Fault in Our Stars",
    author: "John Green",
    genre: "Movie",
    publishDate: "January 10, 2012",
    image: "image/thefaultinourstars.jpg"
  },
  





      {
    title: "Rich Dad Poor Dad",
    author: "Robert T. Kiyosaki",
    genre: "Personal Development",
    publishDate: "April 1, 2000",
    image: "image/richdadpoordad.jpg"
  },
  {
    title: "The 7 Habits of Highly Effective People",
    author: "Stephen R. Covey",
    genre: "Personal Development",
    publishDate: "August 15, 1989",
    image: "image/7habits.jpg"
  },
  {
    title: "Think and Grow Rich",
    author: "Napoleon Hill",
    genre: "Personal Development",
    publishDate: "1937",
    image: "image/thinkandgrow.jpg"
  },
  {
    title: "The Total Money Makeover",
    author: "Dave Ramsey",
    genre: "Personal Development",
    publishDate: "September 17, 2013",
    image: "image/moneymakeover.jpg"
  },
  {
    title: "The Power of Now",
    author: "Eckhart Tolle",
    genre: "Personal Development",
    publishDate: "August 19, 1997",
    image: "image/powerofnow.jpg"
  },
  {
    title: "Atomic Habits",
    author: "James Clear",
    genre: "Personal Development",
    publishDate: "October 16, 2018",
    image: "image/atomichabits.jpg"
  },
  {
    title: "The Millionaire Next Door",
    author: "Thomas J. Stanley and William D. Danko",
    genre: "Personal Development",
    publishDate: "October 1, 1996",
    image: "image/nextdoor.jpg"
  },
  {
    title: "Broke Millennial",
    author: "Erin Lowry",
    genre: "Personal Development",
    publishDate: "May 2, 2017",
    image: "image/broke.jpg"
  },
  {
    title: "The Richest Man in Babylon",
    author: "George S. Clason",
    genre: "Personal Development",
    publishDate: "1926",
    image: "image/richestman.jpg"
  },
  {
    title: "The Psychology of Money",
    author: "Morgan Housel",
    genre: "Personal Development",
    publishDate: "September 8, 2020",
    image: "image/psycologyofmoney.jpg"
  },



  {
    title: "Dune",
    author: "Frank Herbert",
    genre: "Sci-Fi",
    publishDate: "August 1, 1965",
    image: "image/dune.jpg"
  },
  {
    title: "Neuromancer",
    author: "William Gibson",
    genre: "Sci-Fi",
    publishDate: "July 1, 1984",
    image: "image/neuromancer.jpg"
  },
  {
    title: "Foundation",
    author: "Isaac Asimov",
    genre: "Sci-Fi",
    publishDate: "May 1, 1951",
    image: "image/foundation.jpg"
  },
  {
    title: "Ender's Game",
    author: "Orson Scott Card",
    genre: "Sci-Fi",
    publishDate: "January 15, 1985",
    image: "image/endersgame.jpg"
  },
  {
    title: "1984",
    author: "George Orwell",
    genre: "Sci-Fi",
    publishDate: "June 8, 1949",
    image: "image/1984.jpg"
  },
  {
    title: "Brave New World",
    author: "Aldous Huxley",
    genre: "Sci-Fi",
    publishDate: "January 1, 1932",
    image: "image/bravenewworld.jpg"
  },
  {
    title: "The Left Hand of Darkness",
    author: "Ursula K. Le Guin",
    genre: "Sci-Fi",
    publishDate: "June 1969",
    image: "image/darkness.jpg"
  },
  {
    title: "Snow Crash",
    author: "Neal Stephenson",
    genre: "Sci-Fi",
    publishDate: "June 1992",
    image: "image/snowcrash.jpg"
  },
  {
    title: "Hyperion",
    author: "Dan Simmons",
    genre: "Sci-Fi",
    publishDate: "May 26, 1989",
    image: "image/Hyperion.jpg"
  }
      
    ];

    function displaySearchResults(searchResults) {
      const resultsContainer = document.getElementById("searchResults");
      const countElement = document.getElementById("searchCount");
      resultsContainer.innerHTML = "";

      if (searchResults.length === 0) {
        resultsContainer.innerHTML = "<p>No results found.</p>";
        countElement.textContent = `Total books found: 0`;
      } else {
        countElement.textContent = `Total books found: ${searchResults.length}`;

        searchResults.forEach(book => {
          const card = `
          <div class="card">
            <img src="${book.image}" class="card-img-top" alt="${book.title}">
            <div class="card-body">
              <h5 class="card-title">${book.title}</h5>
              <p class="card-text">
                <strong>Author:</strong> ${book.author}<br>
                <strong>Genre:</strong> ${book.genre}<br>
                <strong>Publish Date:</strong> ${book.publishDate}
              </p>
            </div>
          </div>
          `;
          resultsContainer.innerHTML += card;
        });
      }
    }

    function searchBooks(searchTerm) {
      const searchResults = books.filter(book =>
        book.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        book.author.toLowerCase().includes(searchTerm.toLowerCase()) ||
        book.genre.toLowerCase().includes(searchTerm.toLowerCase()) ||
        book.publishDate.includes(searchTerm)
      );

      displaySearchResults(searchResults);
    }

    $(document).ready(function() {
      
      $("#searchButton").click(function() {
        const searchTerm = $("#searchInput").val().trim();
        searchBooks(searchTerm);
      });

      $("#searchInput").keypress(function(event) {
        
        if (event.which === 13) {
          const searchTerm = $("#searchInput").val().trim();
          searchBooks(searchTerm);   
        }
      });

      

      
      $("#searchInput").focus(function() {
        $(".search-bar").animate({ width: "70%"  }, "fast");
      });

      $("#searchInput").focusout(function() {
        $(".search-bar").animate({ width: "70%"  }, "fast");
      });
    });