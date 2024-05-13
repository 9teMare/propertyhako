const { GoogleGenerativeAI } = require("@google/generative-ai");

// Access your API key as an environment variable (see "Set up your API key" above)

class GeminiWrapper {
    private geminiKeys: string[];
    private geminiModels: any[];
    private currGeminiClientIdx: number;

    constructor(modelType: "gemini-pro") {
        const geminiKeysJoint = process.env.GEMINI_KEYS;

        if (!geminiKeysJoint) {
            throw new Error("Missing Gemini API keys. GAN-NI-MA.")
        }

        this.geminiKeys = geminiKeysJoint.split(" ");
        this.geminiModels = [];

        for (let i = 0; i < this.geminiKeys.length; i++) {
            const genAI = new GoogleGenerativeAI(this.geminiKeys[i]);
            const model = genAI.getGenerativeModel({ model: modelType});
            this.geminiModels.push(model);
        }

        this.currGeminiClientIdx = -1;
    }

    async run(prompt: string) {
        // For text-only input, use the gemini-pro model
        this.currGeminiClientIdx = (this.currGeminiClientIdx+1) % this.geminiModels.length;
        const currModel = this.geminiModels[this.currGeminiClientIdx];
        console.log("In running");
        console.log(this.currGeminiClientIdx)

        const result = await currModel.generateContent(prompt);
        const response = await result.response;
        return response.text();
    }
}

module.exports = GeminiWrapper;