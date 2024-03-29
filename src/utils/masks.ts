export const moneyMask = (value: string) => {
   var tmp = value + ''
   tmp = tmp.replace(/([0-9]{2})$/g, ',$1')
   if (tmp.length > 6) tmp = tmp.replace(/([0-9]{3}),([0-9]{2}$)/g, '.$1,$2')

   return tmp
}

export const UniqueName = (props: any) => {
   if (props) {
      const palavras = props.split(' ')

      return FirstUpper(palavras[0])
   }
}

export const FirstUpper = (str: any) => {
   if (typeof str !== 'string') {
      return ''
   }

   return str.charAt(0).toUpperCase() + str.substring(1)
}

export const maskReais = (el: string, installments: number) => {
   const elSplit = el.split('$')[1]
   const convert = (
      (Number(elSplit.replace(/\D/g, '')) * installments) /
      100
   ).toLocaleString('pt-BR', {
      style: 'currency',
      currency: 'BRL',
   })

   return convert
}

export const maskRl = (el: string, installments: number) => {
   const elSplit = el.split('$')[1]
   const convert = (Number(elSplit.replace(/\D/g, '')) * installments) / 100

   return Number(convert.toString().replace('.', ''))
}

export const date = (date: string) => {
   const convert = new Date(date).toLocaleString('pt-BR', {
      timeZone: 'America/Sao_Paulo',
   })
   return convert.split(' ')[0]
}

export const cpfMask = (value: string) => {
   value = value + ''

   if (value.length <= 11) {
      value = value.replace(/(\d{3})(\d)/, '$1.$2')
      value = value.replace(/(\d{3})(\d)/, '$1.$2')
      value = value.replace(/(\d{3})(\d{1,2})$/, '$1-$2')
   } else {
      value = value.replace(/^(\d{2})(\d)/, '$1.$2')
      value = value.replace(/^(\d{2})\.(\d{3})(\d)/, '$1.$2.$3')
      value = value.replace(/\.(\d{3})(\d)/, '.$1/$2')
      value = value.replace(/(\d{4})(\d)/, '$1-$2')
   }

   return value
}

export function maskCpfInput(evt: any) {
   var v = evt?.target.value
      .replace(/\D/g, '')
      .replace(/(\d{3})(\d)/, '$1.$2')
      .replace(/(\d{3})(\d)/, '$1.$2')
      .replace(/(\d{3})(\d{1,2})$/, '$1-$2')

   evt.target.value = v
}

export function maskCpfCnpj(evt: any) {
   //Remove tudo o que não é dígito
   var v = evt
   v = v.replace(/\D/g, '')

   if (v.length <= 11) {
      //CPF

      //Coloca um ponto entre o terceiro e o quarto dígitos
      v = v.replace(/(\d{3})(\d)/, '$1.$2')

      //Coloca um ponto entre o terceiro e o quarto dígitos
      //de novo (para o segundo bloco de números)
      v = v.replace(/(\d{3})(\d)/, '$1.$2')

      //Coloca um hífen entre o terceiro e o quarto dígitos
      v = v.replace(/(\d{3})(\d{1,2})$/, '$1-$2')
   } else {
      //CNPJ

      //Coloca ponto entre o segundo e o terceiro dígitos
      v = v.replace(/^(\d{2})(\d)/, '$1.$2')

      //Coloca ponto entre o quinto e o sexto dígitos
      v = v.replace(/^(\d{2})\.(\d{3})(\d)/, '$1.$2.$3')

      //Coloca uma barra entre o oitavo e o nono dígitos
      v = v.replace(/\.(\d{3})(\d)/, '.$1/$2')

      //Coloca um hífen depois do bloco de quatro dígitos
      v = v.replace(/(\d{4})(\d)/, '$1-$2')
   }

   return v
}

export function maskCpfCnpjInput(evt: any) {
   //Remove tudo o que não é dígito
   var v = evt?.target.value
   v = v.replace(/\D/g, '')

   if (v.length <= 11) {
      //CPF

      //Coloca um ponto entre o terceiro e o quarto dígitos
      v = v.replace(/(\d{3})(\d)/, '$1.$2')

      //Coloca um ponto entre o terceiro e o quarto dígitos
      //de novo (para o segundo bloco de números)
      v = v.replace(/(\d{3})(\d)/, '$1.$2')

      //Coloca um hífen entre o terceiro e o quarto dígitos
      v = v.replace(/(\d{3})(\d{1,2})$/, '$1-$2')
   } else {
      //CNPJ

      //Coloca ponto entre o segundo e o terceiro dígitos
      v = v.replace(/^(\d{2})(\d)/, '$1.$2')

      //Coloca ponto entre o quinto e o sexto dígitos
      v = v.replace(/^(\d{2})\.(\d{3})(\d)/, '$1.$2.$3')

      //Coloca uma barra entre o oitavo e o nono dígitos
      v = v.replace(/\.(\d{3})(\d)/, '.$1/$2')

      //Coloca um hífen depois do bloco de quatro dígitos
      v = v.replace(/(\d{4})(\d)/, '$1-$2')
   }

   evt.target.value = v
}

export function maskCreditCard(evt: any) {
   var v = evt?.target.value
   v = v.replace(/\D/g, '') // Permite apenas dígitos
   v = v.replace(/(\d{4})/g, '$1 ') // Coloca um ponto a cada 4 caracteres
   v = v.replace(/\.$/, '') // Remove o ponto se estiver sobrando
   v = v.substring(0, 19) // Limita o tamanho

   evt.target.value = v
}

export function maskExpirationDate(evt: any) {
   var v = evt?.target.value
   v = v.replace(/\D/g, '') // Permite apenas dígitos
   v = v.replace(/(\d{2})/g, '$1/') // Coloca um / a cada 2 caracteres
   v = v.substring(0, 5) // Limita o tamanho
   evt.target.value = v
}

export function maskMustNumber(evt: any, maxNumber = 5) {
   var v = evt?.target.value
   v = v.replace(/\D/g, '') // Permite apenas dígitos
   v = v.substring(0, maxNumber) // Limita o tamanho
   evt.target.value = v
}

export function masktel(evt: any) {
   var v = evt?.target.value
      .replace(/\D/g, '')
      .replace(/^(\d{2})(\d)/g, '($1) $2')
      .replace(/(\d)(\d{4})$/, '$1-$2')
   evt.target.value = v
}

export function masktel1(phone: string) {
   return phone
      .replace(/\D/g, '')
      .replace(/^(\d{2})(\d)/g, '($1) $2')
      .replace(/(\d)(\d{4})$/, '$1-$2')
}

export function maskCep(t: any, mask: string) {
   var i = t.value.length
   var saida = mask.substring(1, 0)
   var texto = mask.substring(i)
   if (texto.substring(0, 1) != saida) {
      t.value += texto.substring(0, 1)
   }
}

export function maskNewCep(value: string) {
   return value
      .replace(/\D/g, '')
      .replace(/(\d{5})(\d)/, '$1-$2')
      .replace(/(-\d{3})\d+?$/, '$1')
}
