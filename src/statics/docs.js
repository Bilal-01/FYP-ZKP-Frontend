const docs = [
    {
        "title": "zkDist",
        "description": "This function calculates the distance between a data point and a set of data points in an input.json read from csv file. It uses the Zokrates library to validate the computation in zero-knowledge",
    },
    {
        "title": "zkSort",
        "description": "This function sorts an array of data points in a DataFrame. It uses the Zokrates library to validate the sorting in zero-knowledge",
    },
    {
        "title": "zkMaxLabel",
        "description": "This function finds the most frequent label in a given set of labels.  It uses the Zokrates library to validate the computation in zero-knowledge.",
    },
    {
        "title": "zkTreeTraversal",
        "description": "This function demonstrates a technique for generating zero-knowledge proofs (ZKPs) that verify the correct traversal of a decision tree without revealing the tree's structure or the input data.",
    },
    {
        "title": "zkArgmax",
        "description": "This function generates zero-knowledge proofs (ZKPs) for efficiently proving the index of the maximum value in an array, while keeping the array elements themselves confidential.",
    },
    {
        "title": "zkApplyWeights",
        "description": "This function involves multiplying a matrix by another matrix (often referred to as a weight matrix in the context of neural networks) and adding a bias vector. The goal of this function is to prove that the operation has been performed correctly without revealing the actual values of the matrices or the bias vector.",
    },
    {
        "title": "zkConv2D",
        "description": "This function is designed to generate zero-knowledge proofs (ZKPS) for the output of a 2D convolution operation, allowing the verification of the correctness of the operation without revealing the input data or the filters used.",
    },
    {
        "title": "zkRelu",
        "description": "The function is designed to generate zero-knowledge proofs(ZKPs) for the ReLU (Rectified Linear Unit) operation, which is a common activation function in neural networks. The ReLU function outputs the input directly if it is positive; otherwise, it outputs zero.",
    },
    {
        "title": "zkSoftmax",
        "description": "It generates proofs to ensure that output values lie within a specified range and sum up to 1, crucial for classification tasks where outputs represent class probabilities.",
    },
    {
        "title": "zkMaxPooling",
        "description": "This function generates proofs for the max pooling operation in neural networks, crucial for downsampling input data while maintaining privacy.",
    },
   
]

export default docs;