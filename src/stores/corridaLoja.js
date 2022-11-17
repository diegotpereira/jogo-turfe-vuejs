import { defineStore } from 'pinia';

export const useCorridaLoja = defineStore('CorridaLoja', {
    
    state: () => {

        return {
            ehCorrida: false,
            numeroDeCavalos: 1,
            cavalos: [
                {
                    id: 1,
                    nome: 'Galã',
                    correndo: false,
                    posicaoLargada: 0,
                    numeroDe: null
                },
                {
                    id: 2,
                    nome: 'Ambicioso',
                    correndo: false,
                    posicaoLargada: 0,
                    numeroDe: null
                },
                {
                    id: 3,
                    nome: 'Angus',
                    correndo: false,
                    posicaoLargada: 0,
                    numeroDe: null
                },
                {
                    id: 4,
                    nome: 'Lucky',
                    correndo: false,
                    posicaoLargada: 0,
                    numeroDe: null
                },
                {
                    id: 5,
                    nome: 'Impetuoso',
                    correndo: false,
                    posicaoLargada: 0,
                    numeroDe: null
                },
                {
                    id: 6,
                    nome: 'Tremor',
                    correndo: false,
                    posicaoLargada: 0,
                    numeroDe: null
                },
                {
                    id: 7,
                    nome: 'Corvo',
                    correndo: false,
                    posicaoLargada: 0,
                    numeroDe: null
                },
                {
                    id: 8,
                    nome: 'Zorro',
                    correndo: false,
                    posicaoLargada: 0,
                    numeroDe: null
                }
            ]
        }
    },
    getters: {

    },
    actions: {

    }
});