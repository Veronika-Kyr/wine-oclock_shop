import { createServer } from "miragejs";



export default function server() {

    createServer({
        routes() {

            this.get("/test", () => (
                [
                    {
                        "id": "1",

                        "name": "test1",

                    },
                    {
                        "id": "2",

                        "name": "test2",

                    }
                ]
            ))

        }
    }
    )
}