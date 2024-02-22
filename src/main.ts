import express from "express";
import { db, firestore } from "../banco de dados/firebase";
import cors from "cors";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true}));
app.use(cors({
    "origin": "*",
    "methods": "GET,HEAD,PUT,PATCH,POST,DELETE",
}));

app.get('/', (req, res) => {
    res.send("Bem vindo a minha primeira API");
})

app.post("/Formulario", async (req, res) => {
    const nome = req.body.nome;
    const telefone = req.body.telefone;
    const email = req.body.email;
    const descricao = req.body.descricao;
    try {
        
        const docRef = await firestore.addDoc(firestore.collection(db, "Formulario"),
        {
            nome: nome,
            telefone: telefone,
            email: email,
            descricao: descricao,
        });
        res.send("Rsposta enviada com sucesso " + docRef.id)

    } catch (e) {
        console.log(e)

        res.status(500).send(e)
    }
});

app.get("/listarFormulario", async(req, res) =>{
    try {
        const Formulario = await firestore.getDocs(firestore.collection(db, "formulario"))

        const FormularioLista = Formulario.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
        }))

        res.send(FormularioLista)
    } catch (e) {
        console.log("Erro ao listar Formulario" + e)
        res.status(500).send("Erro ao listar Formulario" +e)
    }

app.put("/atualizarFormulario/:id", async (req, res)=>{
    const id = req.params.id
    const nome = req.body.nome


    try {
        await firestore.updateDoc(firestore.doc(db, "usuarios", id), {
            nome: nome,
        })
        res.send("Formulario atualizado com sucesso!")
    } catch (e) {
        console.log("Erro ao atualizar o Formulario" + e)

        res.status(500).send("Erro ao atualizar o Formulario" + e)
    }
    
})

app.delete("/deletarFormulario/:id",async (req,res) =>{
    const id = req.params.id

    try {
      await firestore.deleteDoc(firestore.doc(db,"Formulario", id))  

      res.send("formulario deletado com sucesso!")
    } catch (e) {
        console.log("Erro ao deletar o formulario: " +e)

        res.status(500).send("Erro ao deletar o formulario: " +e)
    }
})

});


app.listen(3000, function () {
    console.log("Serviço rodando em http://localhost:3000");
});
