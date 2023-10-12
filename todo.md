# API Documentation
We provide a simple API to access the Advanced Reasoning Benchmark (ARB). The API currently supports standard HTTP GET requests.

# API Calls
We have three different types of API calls for retrieving problems. See here and select ARB API server as the mock server to see what the outputs look like.


# Categories without Images.

For law, problems are retrieved according to the following template:

`https://advanced-reasoning-benchmark.netlify.app/api/lib/law/`

For math, you can retrieve the problems according to the following template: 

`https://advanced-reasoning-benchmark.netlify.app/api/lib/math/{"{answer-type}"}/`

where acceptable values for `{"{answer-type}"}` are `numerical`, `symbolic`, and `prooflike`. 
  
For MCAT Reading, you can retrieve the problems according to the following template:

`https://advanced-reasoning-benchmark.netlify.app/api/lib/math/{"{split}"}/`

where acceptable values for `{"{answer-type}"}` are `val` and `test`.
  
# Categories with Images.

For physics and MCAT Science, you can specify whether you want the problems with or without images.

`https://advanced-reasoning-benchmark.netlify.app/api/lib/{"{category}"}/{"{answer-type}"}/{"{modality}"}`

For physics, acceptable values for `{"{answer-type}"}` are `numerical` and `symbolic`. Acceptable values for `{"{modality}"}` are `img` and `noimg`. For example, if you want the physics numerical problems with images, you can use the following template:

`https://advanced-reasoning-benchmark.netlify.app/api/lib/symbolic/numerical/img`

For MCAT Science, `{"{answer-type}"}` should be filled in with the splits, namely `val` and `test`. Acceptable values for `{"{modality}"}` are `img` and `noimg`. For example, if you want the MCAT Science from the validation split without images, you can use the following template:

`https://advanced-reasoning-benchmark.netlify.app/api/lib/science/val/noimg`
`


