const request = require('supertest');
const app = require('../src/app'); // Adjust the path as necessary

describe('Chatbot API', () => {
  it('should respond to a simple greeting', async () => {
    const response = await request(app)
      .post('/chat')
      .send({ message: 'Hello, what can I order?' });

    expect(response.status).toBe(200);
    expect(response.body.reply).toBeDefined();
  });

  it('should suggest a vegan dish when asked', async () => {
    const response = await request(app)
      .post('/chat')
      .send({ message: 'Can you recommend something vegan?' });

    expect(response.status).toBe(200);
    expect(response.body.reply).toContain('vegan');
  });

  it('should handle dietary restrictions', async () => {
    const response = await request(app)
      .post('/chat')
      .send({ message: 'I need something gluten-free.' });

    expect(response.status).toBe(200);
    expect(response.body.reply).toContain('gluten-free');
  });

  it('should confirm the order', async () => {
    const response = await request(app)
      .post('/chat')
      .send({ message: 'I would like to order the Spicy Tofu Bowl.' });

    expect(response.status).toBe(200);
    expect(response.body.reply).toContain('confirm');
  });

  it('should return an error for invalid input', async () => {
    const response = await request(app)
      .post('/chat')
      .send({ message: 'Can I have sushi?' });

    expect(response.status).toBe(200);
    expect(response.body.reply).toContain('Sorry, we do not have that');
  });
});