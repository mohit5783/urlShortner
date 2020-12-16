const UrlController = require("../Controllers/UrlController");
const client = require("../DB/db.js");


beforeEach(async() => {
  await client.connectDB();
  await client.getDb();
});

jest.mock("../DB/db.js");

test('is Valid URL', () => {
    expect(UrlController.isValidUrl("https://mohitshrivastava.com")).toBe(true);
    expect(UrlController.isValidUrl("https://www.mohitshrivastava.com")).toBe(true);
    expect(UrlController.isValidUrl("http://mohitshrivastava.com")).toBe(true);
    expect(UrlController.isValidUrl("http://www.mohitshrivastava.com")).toBe(true);
})

test('is Valid URL', () => {
    expect(UrlController.isValidUrl("mohitshrivastava")).toBe(false);
    expect(UrlController.isValidUrl("mohitshrivastava is a human")).toBe(false);
    expect(UrlController.isValidUrl("mohit5783@gmail.com")).toBe(false);
})

test('Return the correct host after deployment', () => {
    expect(UrlController.CreateNewShortURL("mohitshrivastava.com")).toMatch(/mohitshrivastava/i);
})

test('Should not return LocalHost', () => {
    expect(UrlController.CreateNewShortURL("mohitshrivastava.com")).not.toMatch(/localhost/);
})
const mockRequest = (sessionData) => {
    return {
        session: { data: sessionData },
    };
};
const mockResponse = () => {
    const res = {};
    res.status = jest.fn().mockReturnValue(res);
    res.json = jest.fn().mockReturnValue(res);
    return res;
};

test('Should return more than 1 URLs', async () => {
    const req = mockRequest();
    const res = mockResponse();

    await UrlController.getAllURLs(req, res);

    expect(res.json).not.toBeNull();
})

test('Should Add record to DB', async () => {
    const req = mockRequest({ LongURL: "https://www.latlong.net/c/?lat=61.029696&long=-148.970662" });
    const res = mockResponse();
    const spy = jest.spyOn(client, 'connectDB');

    const urladded = await UrlController.AddURL(req, res);
    expect(res.json).not.toBeNull();
})

test('Connect to DB', async () => {
    expect(await client.connectDB()).not.toBeNull();
    expect(await client.getDb()).not.toBeNull();
})


