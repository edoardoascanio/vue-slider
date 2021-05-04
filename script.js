const app = new Vue({

    el: "#app",
    data: {
        imagesList: [
            "https://picsum.photos/1080/600?i=0",
            "https://picsum.photos/1080/600?i=1",
            "https://picsum.photos/1080/600?i=2",
            "https://picsum.photos/1080/600?i=3",
            "https://picsum.photos/1080/600?i=4"
        ],
        activeImg: 0
    },
    methods: {
        /**
         * 
         * @param {number} direction 
         */
        changeImg(direction) {
            const newIndex = this.activeImg + direction;

            if (newIndex < 0) {
                newIndex = this.imagesList.length - 1;
            } else if (newIndex > (this.imagesList.length - 1)) {

                newIndex = 0;
            }


            this.activeImg += direction;
        }
    }
})

