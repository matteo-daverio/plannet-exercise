export class Film {
    public name: string;
    public duration: number;
    public genre: string;

    constructor(name?: string, duration?: number, genre?: string) {
        this.name = name ?? "";
        this.duration = duration ?? 0;
        this.genre = genre ?? "";
    }
}
