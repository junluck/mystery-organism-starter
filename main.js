// Returns a random DNA base
const returnRandBase = () => {
  const dnaBases = ['A', 'T', 'C', 'G'];
  return dnaBases[Math.floor(Math.random() * 4)];
};

// Returns a random single stand of DNA containing 15 bases
const mockUpStrand = () => {
  const newStrand = [];
  for (let i = 0; i < 15; i++) {
    newStrand.push(returnRandBase());
  }
  return newStrand;
};

function pAequorFactory(number,bases){
  let count = 0
  return{
    specimenNum:number,
    dna:bases,
    mutate(){
      for (let i = 0; i < this.dna.length; i++){
        let randomStrand = returnRandBase();
        if (this.dna[i] === randomStrand   && randomStrand === "A"){
           let dnaStrands = ["T","C","G"];
           bases[i]= dnaStrands[Math.floor(Math.random() * 3)];
        }
        else if (this.dna[i] === randomStrand && randomStrand === "T"){
           let dnaStrands = ["A","C","G"];
           bases[i] = dnaStrands[Math.floor(Math.random() * 3)];
        }
        else if (this.dna[i] === randomStrand && randomStrand === "C"){
           let dnaStrands = ["A","T","G"];
           bases[i] = dnaStrands[Math.floor(Math.random() * 3)];
        }
        else if (this.dna[i] === randomStrand && randomStrand === "G"){
           let dnaStrands = ["A","T","C"];
           bases[i] = dnaStrands[Math.floor(Math.random() * 3)];
        }
        else{
          bases[i] = randomStrand; 
        }
      }
    },
    compareDNA(pAequor){
      let percentageTotal = 0;
      let onePercentage = (1 / 15) * 100;
      for (let i = 0; i < this.dna.length; i++){
          if(this.dna[i] === pAequor.dna[i]){
           percentageTotal += onePercentage;

        }
      }
      console.log(`specimen ${this.specimenNum} and specimen ${pAequor.specimenNum} have ${Math.round(percentageTotal)}% DNA in common`)
    },
    willLikelySurvive(){
      let totalPercentage = 0;
       let onePercentage = (1 / 15) * 100;
      for (let i = 0; i < this.dna.length; i++){
        if (this.dna[i] === "C" || this.dna[i] === "G"){
          totalPercentage += onePercentage; 
        }
      }
      console.log(Math.round(totalPercentage));
      if (Math.round(totalPercentage) >= 60){
          return true;
        }
        else{
          return false;
        }
    }
  };
}

let groupOfpA = [];
for(let i = 0; i < 30; i++){
  groupOfpA[i] =  pAequorFactory(i, mockUpStrand());
};

console.log(groupOfpA)
const specimanOne = pAequorFactory (1,mockUpStrand());
const specimanTwo = pAequorFactory (2,mockUpStrand());

const mutatetSpecimanOne = specimanOne.mutate();
const mutateSpecimanTwo = specimanTwo.mutate();





