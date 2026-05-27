function analyzeResume() {

  let text = document.getElementById("resumeText").value;

  let score = 0;

  const skills = [
    "python",
    "java",
    "javascript",
    "html",
    "css",
    "ai",
    "machine learning",
    "react"
  ];

  let foundSkills = [];

  skills.forEach(skill => {
    if(text.toLowerCase().includes(skill)){
      score += 10;
      foundSkills.push(skill);
    }
  });

  document.getElementById("result").innerHTML = `
    <h3>Resume Score: ${score}/100</h3>
    <p><strong>Skills Found:</strong> ${foundSkills.join(", ")}</p>
  `;
}