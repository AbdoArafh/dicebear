var app = {
    data: function () {
        return {
            seed: "",
            url: "",
            sprites: ["male", "female", "identicon", "initials", "bottts", "avataaars",
                "jdenticon", "gridy", "micah"],
            sprite: "male"
        };
    },
    mounted: function () {
        this.generateUrl();
    },
    methods: {
        generateUrl: function () {
            this.url = "https://avatars.dicebear.com/api/" + this.sprite + "/" + encodeURIComponent(this.seed) + ".svg";
        }
    }
};
Vue.createApp(app).mount("#app");
