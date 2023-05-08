const CropRegistration = artifacts.require("cropregistration");
// const CropEstimation = artifacts.require("cropestimation");

contract("Cropregistration", async (accounts) => {
  let registration;
  // let estimation;

  beforeEach(async () => {
    registration = await Cropregistration.new({ from: accounts[0] });
    // estimation = await CropEstimation.new(registration.address, { from: accounts[0] });
  });

  it("should estimate produce for a registered crop", async () => {
    const cropName = "wheat";
    const cropArea = 100;
    const cropDistrict = "Hisar";
    await registration.registerCrop(cropName, cropArea, cropDistrict, { from: accounts[0] });
    // const estimatedProduce = await estimation.estimateProduce({ from: accounts[0] });
    const expectedProduce = cropArea * 24;
    // assert.equal(estimatedProduce, expectedProduce, "Estimated produce is incorrect");
  });

  // it("should not estimate produce for an unregistered crop", async () => {
  //   const cropName = "rice";
  //   // const estimatedProduce = await estimation.estimateTotalProduce(cropName, { from: accounts[0] });
  //   assert.equal(estimatedProduce, 0, "Estimated produce is not zero for an unregistered crop");
  // });
});
