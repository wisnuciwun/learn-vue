// console.log("this is console log")
const app = Vue.createApp({
    //add data, function, or what u want
    // template: '<span>Yes im from app.js<span/>'
    data() { //must type data() not our own function name
        return {
            title : 'How to cook Noodle',
            myurl : 'http://google.com',
            author : 'Kimmy',
            duration : '2 min',
            playlist : '',
            showPlaylist : false,
            showCreator: true,
            x : 0,
            y : 0,
            anotherPlaylist : [
                {
                    title : 'Lets make a Soto',
                    author : 'Anderson',
                    creatorMode : true
                },
                {
                    title : 'How fry Tempe so crispy',
                    author : 'Kimmy',
                    creatorMode : true
                },
                {
                    title : 'Lets make some fried rice',
                    author : 'Ruby',
                    creatorMode: true
                }
            ],
            images: [
                {name: 'Rachmat', img: 'assets/2.png', creatorMode : false},

                {name: 'Jennie', img: "assets/1.png", creatorMode : true},

                {name: 'Ubay', img: "assets/1.png", creatorMode : true}
            ]
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
        },

        handleMouseEvent(e, data = ''){
            console.log("hi it works !", e, data)
        },

        handleMouseMove(e){
            this.x = e.offsetX
            this.y = e.offsetY
        },

        toggleCreatorMode(value){
            value.creatorMode = !value.creatorMode
        },

        toggleCreatorList(){
            this.showCreator = !this.showCreator
        },
    },
    computed: {
        // computed properties (like didmount in react)
        filteredPlaylist(){
            if(this.showCreator == true){
                return this.images
            }else{
                return this.images.filter(x => x.creatorMode == false)
            }
        }
    }
}) //vue library
app.mount('#element1') //call and control element named element1 in html code

