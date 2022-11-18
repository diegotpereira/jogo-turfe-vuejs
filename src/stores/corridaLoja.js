import { defineStore } from 'pinia';
import { numeroAleatorio } from '@/utils/numeroAleatorio';

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
        corridaFinalizada: (state) => {
            if(state.numeroDeCavalos === (state.cavalos.length + 1)) {
                state.ehCorrida = false;
            }
        }
    },
    actions: {

        async corridaCavalo(cavaloId) {
            const encontrarIndiceCavalo = this.cavalos.findIndex((cavalo) => cavalo.id === cavaloId);
            const correndo = setInterval(() => {
                const aleatorio = numeroAleatorio(0.01, 1.00)
                this.cavalos[encontrarIndiceCavalo].posicaoLargada += aleatorio;

                if(this.cavalos[encontrarIndiceCavalo].posicaoLargada > 100) {
                    this.cavalos[encontrarIndiceCavalo].posicaoLargada = 100;
                    this.cavalos[encontrarIndiceCavalo].correndo = false;
                    this.cavalos[encontrarIndiceCavalo].numeroDe = this.numeroDeCavalos;

                    if(this.numeroDeCavalos < this.cavalos.length) {
                        this.numeroDeCavalos++;

                    } else {
                        this.numeroDeCavalos = 1;
                        this.ehCorrida = false;
                    }
                    clearInterval(correndo);
                }
            }, 50);
        },
        cavalosCorrendo() {
            this.cavalos.map((cavalo) => cavalo.correndo = true)
        }
    }
});