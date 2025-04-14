import fetch from "node-fetch"
import { expect } from "chai";
import Ajv from "ajv";
import schema_getngambildatauser from "../schema/get.Schema.js";
import schema_postbikinuserbaru from "../schema/post.Schema.js";
import schema_putupdatedatauser from "../schema/put.Schema.js";
import schema_deletedatauser from "../schema/delete.Schema.js";

describe("API Test Suite coba",function(){
    const baseURL =`https://dummyjson.com`;

    it ("GET Ngambil Data User",async function () {
        //tembak url dummyjson
        const responseGet = await fetch(`${baseURL}/carts/1`);
        //validasi http statusnya harus 200
        expect(responseGet.status,"ada yang salah nih dari method GET").to.equal(200)
        //validasi json schema
        const ajvGet = new Ajv()
        const dataGet = await responseGet.json();
        const cekcekGet = ajvGet.compile(schema_getngambildatauser)
        const hasil_schemaGet = cekcekGet(dataGet)

        expect(hasil_schemaGet,`schema is not valid from method GET`).to.be.true
    })

    it ("POST Bikin User Baru",async function () {
        //tembak url dummyjson
        const newPost ={
            title: "Averina",
            userId: 25
        }
        const responsePost = await fetch(`${baseURL}/posts/add`,{
            method:`POST`,
            headers:{"Content-Type":"application/json"},
            body: JSON.stringify(newPost)
        });
        //validasi http statusnya harus 201
        expect(responsePost.status,"ada yang salah nih dari method POST").to.equal(201)
        //validasi json schema
        const ajvPost = new Ajv()
        const dataPost = await responsePost.json();
        const cekcekPost = ajvPost.compile(schema_postbikinuserbaru)
        const hasil_schemaPost = cekcekPost(dataPost)

        expect(hasil_schemaPost,`schema is not valid from method POST`).to.be.true
    })

    it ("PUT Update User Baru",async function () {
        //tembak url dummyjson
        const newPut ={
            title: "Fidelia",
            userId: 26
        }
        const responsePut = await fetch(`${baseURL}/posts/1`,{
            method:`PUT`,
            headers:{"Content-Type":"application/json"},
            body: JSON.stringify(newPut)
        });
        //validasi http statusnya harus 200
        expect(responsePut.status,"ada yang salah nih dari method PUT").to.equal(200)
        //validasi json schema
        const ajvPut = new Ajv()
        const dataPut = await responsePut.json();
        const cekcekPut = ajvPut.compile(schema_putupdatedatauser)
        const hasil_schemaPut = cekcekPut(dataPut)

        expect(hasil_schemaPut,`schema is not valid from method PUT`).to.be.true
    })

    it ("DELETE Delete Data User",async function () {
        //tembak url dummyjson
        const responseDelete = await fetch(`${baseURL}/carts/1`,{
            method:`DELETE`
        });
        //validasi http statusnya harus 200
        expect(responseDelete.status,"ada yang salah nih dari method PUT").to.equal(202)
        //validasi json schema
        const ajvDelete = new Ajv()
        const dataDelete = await responseDelete.json();
        const cekcekDelete = ajvDelete.compile(schema_deletedatauser)
        const hasil_schemaDelete = cekcekDelete(dataDelete)

        expect(hasil_schemaDelete,`schema is not valid from method PUT`).to.be.true
    })
})