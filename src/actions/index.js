// action what to do (apko kia krna ha)  increment decrement khn ziadaa or khn kam krna ha tw ye kam action sy perform hota ha


export const incNumber = () => {
    return {
        type: 'INCREMENT'
    }
}
// incNumber function k call par increment krna ha same decnum par decrement

export const decNumber = () => {
    return {
        type: 'DECREMENT'
    }
}


// action ki help sy kia kia perform hony wla ha increment or decrement