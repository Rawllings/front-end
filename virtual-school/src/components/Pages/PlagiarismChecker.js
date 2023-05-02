import React, { useState } from "react";
import EducatorSideBar from "./EducatorSideBar";

function PlagiarismChecker() {
  const [text1, setText1] = useState("");
  const [text2, setText2] = useState("");
  const [plagiarismPercentage, setPlagiarismPercentage] = useState(0);
  const [plagiarismThreshold, setPlagiarismThreshold] = useState(0);
  const [identicalWords, setIdenticalWords] = useState([]);

  function handleText1Change(event) {
    setText1(event.target.value);
  }

  function handleText2Change(event) {
    setText2(event.target.value);
  }

  function handlePlagiarismThresholdChange(event) {
    setPlagiarismThreshold(Number(event.target.value));
  }

  function handleCheckPlagiarism() {
    const words1 = text1.split(/\s+/);
    const words2 = text2.split(/\s+/);

    const identicalWords = words1.filter((word) => words2.includes(word));
    const plagiarismPercentage = Math.round(
      (identicalWords.length /
        (words1.length + words2.length - identicalWords.length)) *
        100
    );
    setPlagiarismPercentage(plagiarismPercentage);
    setIdenticalWords(identicalWords);
  }

  function displayIdenticalWords(identicalWords) {
    return identicalWords.join(" ");
  }

  function highlightIdenticalWords(text) {
    const words = text.split(/\s+/);
    return words.map((word) =>
      identicalWords.includes(word) ? (
        <span style={{ color: "red" }}>{word} </span>
      ) : (
        word + " "
      )
    );
  }

  return (
    <>
      <div
        className="text-3xl"
        style={{
          text: "center",
          paddingTop: "70px",
          paddingLeft: "260px",
        }}
      >
        <div className="bg-white rounded-lg shadow-lg p-6">
          <h1 className="text-center text-3xl font-bold text-green-600 mb-8">
            Plagiarism Checker
          </h1>
          <div className="flex flex-col md:flex-row justify-center items-center md:space-x-12">
            <div className="w-full md:w-1/2 mb-6 md:mb-0">
              <label
                htmlFor="text1"
                className="text-green-600 text-lg font-semibold mb-2 block"
              >
                Enter Text 1
              </label>
              <textarea
                id="text1"
                className="bg-gray-100 rounded-lg p-4 w-full border-2 border-gray-200 focus:outline-none focus:border-green-600"
                placeholder="Enter text 1"
                value={text1}
                onChange={handleText1Change}
              />
            </div>
            <div className="w-full md:w-1/2">
              <label
                htmlFor="text2"
                className="text-green-600 text-lg font-semibold mb-2 block"
              >
                Enter Text 2
              </label>
              <textarea
                id="text2"
                className="bg-gray-100 rounded-lg p-4 w-full border-2 border-gray-200 focus:outline-none focus:border-green-600"
                placeholder="Enter text 2"
                value={text2}
                onChange={handleText2Change}
              />
            </div>
          </div>
          <div className="mt-8 flex justify-center">
            <button
              type="submit"
              className="bg-green-600 hover:bg-black hover:text-white text-white font-bold py-2 px-4 rounded-full"
              onClick={handleCheckPlagiarism}
            >
              Check Plagiarism
            </button>
          </div>
          {plagiarismPercentage > 0 && (
            <div className="mt-8 text-center">
              <p className="text-3xl font-bold text-green-600">
                Plagiarism Percentage: {plagiarismPercentage}%
              </p>
              <p className="text-xl font-semibold text-gray-500 mt-4">
                {plagiarismPercentage >= plagiarismThreshold
                  ? "This text is plagiarized"
                  : "This text is not plagiarized"}
              </p>
            </div>
          )}
          {identicalWords.length > 0 && (
            <div className="mt-8">
              <p className="text-3xl font-bold text-green-600">
                Identical Words:
              </p>
              <div className="bg-gray-100 rounded-lg p-4 border-2 border-gray-200 mt-4">
                {displayIdenticalWords(identicalWords)}
              </div>
              <div className="mt-4">
                <p className="text-lg font-semibold text-green-600">Text 1:</p>
                <div className="bg-gray-100 rounded-lg p-4 border-2 border-gray-200 mt-2">
                  {highlightIdenticalWords(text1)}
                </div>
              </div>
              <div className="mt-4">
                <p className="text-lg font-semibold text-green-600">Text 2:</p>
                <div className="bg-gray-100 rounded-lg p-4 border-2 border-gray-200 mt-2">
                  {highlightIdenticalWords(text2)}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
      <EducatorSideBar />
    </>
  );
}

export default PlagiarismChecker;
