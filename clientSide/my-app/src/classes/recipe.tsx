export class Recipe 
{
    constructor(
        public name?: String,
        public description?: String,
        public pic?: String, 
        public level?: String,
        public duration?: String, 
        public type?: String,
        public password?: String,
        public ingredients?: Array <object>
    ) {}
}