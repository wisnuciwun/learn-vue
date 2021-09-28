// console.log("this is console log")
const app = Vue.createApp({
    //add data, function, or what u want
    // template: '<span>Yes im from app.js<span/>'
    data() { //must type data() not our own function name
        return {
            title : 'How to cook Noodle',
            author : 'Kimmy',
            duration : '2 min',
            playlist : '',
            showPlaylist : false
        }
    },
    methods : {
        changeTitle() {
            this.title = 'How to make tart cookies', //u must use this. (like a constructor)
            this.author = 'Angela',
            this.duration = '20 min',
            this.playlist = ''
        },

        selfTitle(title, author, duration) {
            this.title = title, //u must use this. (like a constructor)
            this.author = author,
            this.duration = duration,
            this.playlist = ''
        },

        toggleShowPlaylist(){
            this.showPlaylist = !this.showPlaylist
            // reminder : var++ is increase val 
        }
    }
}) //vue library
app.mount('#element1') //call and control element named element1 in html code

