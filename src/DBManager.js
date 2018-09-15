import type {Texts} from "./Types";

class DBManager {
    STATE_KEY = 'plantuml_diagram_texts';
    STORAGE = localStorage;

    create(value: string): number {
        const oid = Date.now();  // XXX: maybe that would be no good
        let all = this.readAll();

        if (all === null) {
            all = this.replace({});
        }
        all[oid] = value;
        this.replace(all);

        return oid;
    }

    read(index: number): string {
        return this.readAll()[index];
    }

    update(index: number, value: string): null {
        const texts = this.readAll();
        texts[index.toString()] = value;
        this.replace(texts);

        return texts;
    }

    readAll(): Texts {
        return JSON.parse(this.STORAGE.getItem(this.STATE_KEY));
    }

    replace(value: Texts) {
        this.STORAGE.setItem(this.STATE_KEY, JSON.stringify(value));
        return value;
    }
}

export default DBManager