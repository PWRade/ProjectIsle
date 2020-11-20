var vm = new Vue({
    //Output to Div ID
    el: '#game-window',
    data: function() {
        return{
            //Current picked location
            currentLocation: {
                name: null,
                desc: null,
                wrongCommand: 'Sorry, you cannot go down that way',
            },
            //Locations
            locations: {
                one: {
                    name: 'Sandy Shore',
                    desc: 'You awaken on a beach with the sun beaming down upon you. You are not quite sure how you ended up here.'+
                            'To the north in the distance you see a small town, to the south is the ocean,'+
                            ' to the east is more of the coastline, and to the west there seems to be a forest',
                    north: 'three',
                    south: 'two',
                    east: 'five',
                    west: 'four',
                    take: null,
                },

                two: {
                    name: 'Sandy Shore - Ocean',
                    desc: 'You see nothing but the ocean and a small wooden boat that has seen better days.',
                    north: 'one',
                    south: null,
                    east: null,
                    west: null,
                    look: 'You look closer at the boat and see something reflective',
                    take: {
                        item: "dagger",
                    },
                },

                three: {
                    name: 'Small Town - Path',
                    desc: 'You travel down the dirt path that continues to the town in the distance.',
                    north: null,
                    south: 'one',
                    east: null,
                    west: null,
                    look: 'On the sides the path there are growing fruit trees.',
                    take: 'You have taken some fruit from the trees.'
                },

                four: {
                    name: 'Sandy Shore - Forest',
                    desc: 'You travel west down the sand and reach terrain with long grass. Trees located to the west are overgrown, blocking out light from the sun.',
                    north: null,
                    south: null,
                    east: 'one',
                    west: null,
                    look: 'There seems to be nothing of note here.',
                    take: ''
                }
            },
            //Input for commands (directions etc.)
            userInput: null
        }
        
    },
    //Starting location
    created: function() {
        this.currentLocation = this.locations['one'];
    },
    methods: {
        performAction: function() {
            console.log(this.currentLocation);
            switch(this.userInput) {
                case 'north':
                    if(this.currentLocation.north !== null){
                        this.currentLocation = this.locations[this.currentLocation.north];
                    }
                    break;
                case 'south':
                    if(this.currentLocation.south !== null){
                        this.currentLocation = this.locations[this.currentLocation.south];
                    }
                    break;
                case 'east':
                    if(this.currentLocation.east !== null){
                        this.currentLocation = this.locations[this.currentLocation.east];
                    }
                    break;
                case 'west':
                    if(this.currentLocation.west !== null){
                        this.currentLocation = this.locations[this.currentLocation.west];
                    }
                    break;
                case 'take':
                    if(this.currentLocation.take !== null)
                    {
                        inventory = inventory.concat([item])
                    }
                    break;
                //case 'inventory':
                //case 'i':
                //case 'bag':
            }
        }
    }
})