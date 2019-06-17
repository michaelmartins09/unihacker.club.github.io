$(function() {
  getPhotoFromGithub()
})

var typed_header = new Typed('#autotype_header',{
    strings: ["UNIPAMPA", "CoffeeHack", "EnglishHack", "CineHack", "TchêHack", "Hackaton", "EscolaHack", "InfoHack", "InterClubHack", "IdentificaHack", "ResolveHack", "InovaHack"],
    typeSpeed: 75,
    backSpeed: 30,
    loop: true
});

var typed_logo = new Typed('#autotype_logo',{
  strings: ["Clube Universidade Hacker"],
  typeSpeed: 100,
  loop: false,
  showCursor: true,
  cursorChar: '▮',
});

particlesConfig = {
    particles: {
      number: {
        value: 100,
        density: {
          enable: true,
          value_area: 800
        }
      },
      color: {
        value: '#9acc14'
      },
      shape: {
        type: 'circle',
        stroke: {
          width: 0,
          color: '#000000'
        },
        polygon: {
          nb_sides: 5
        },
        image: {
          src: 'img/github.svg',
          width: 100,
          height: 100
        }
      },
      opacity: {
        value: 0.5,
        random: false,
        anim: {
          enable: false,
          speed: 0.5,
          opacity_min: 0.1,
          sync: false
        }
      },
      size: {
        value: 1,
        random: true,
        anim: {
          enable: false,
          speed: 40,
          size_min: 0.1,
          sync: false
        }
      },
      line_linked: {
        enable: true,
        distance: 150,
        color: '#5bc117',
        opacity: 0.4,
        width: 1
      },
      move: {
        enable: true,
        speed: 3,
        direction: 'right',
        random: false,
        straight: false,
        out_mode: 'out',
        bounce: false,
        attract: {
          enable: false,
          rotateX: 600,
          rotateY: 1200
        }
      }
    },
    interactivity: {
      detect_on: 'window',
      events: {
        onhover: {
          enable: true,
          mode: 'repulse'
        },
        onclick: {
          enable: false,
          mode: 'push'
        },
        resize: true
      },
      modes: {
        grab: {
          distance: 10,
          line_linked: {
            opacity: 1
          }
        },
        bubble: {
          distance: 10,
          size: 40,
          duration: 2,
          opacity: 8,
          speed: 3
        },
        repulse: {
          distance: 100,
          duration: 0.4
        },
        push: {
          particles_nb: 4
        },
        remove: {
          particles_nb: 2
        }
      }
    },
    retina_detect: true
  }

particlesJS('particles-js', particlesConfig);

$('#equipe [data-toggle=tooltip]').tooltip({
  template: '<div class="tooltip mb-2" role="tooltip"><div class="arrow arrow-down-tooltip"></div><div class="tooltip-inner tooltip-parallelogram equipe"></div></div>',
  html: true
})

const getPhotoFromGithub = () => { 
  $('img[data-github-photo]').each(function() {
    let githubUser = $(this).data('github-photo');

    if(!githubUser) {
      return
    }

    axios.get(`https://api.github.com/users/${githubUser}`)
    .then(user => {
      $(this).attr('src', user.data.avatar_url)
    })
    .catch(e => {
    })
  }) 
}
