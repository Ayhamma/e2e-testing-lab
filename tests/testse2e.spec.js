import { test, expect } from '@playwright/test';

const BASE = 'http://localhost:3000';
const EMAIL = 'user@test.com';
const PASS_OK = '1234';
const PASS_BAD = 'wrong';

test('Успешная авторизация', async ({ page }) => {
  await page.goto(BASE);
  await page.getByTestId('email').fill(EMAIL);
  await page.getByTestId('password').fill(PASS_OK);
  await page.getByTestId('login-btn').click();
  await expect(page.getByTestId('todo-app')).toBeVisible();
});

test('Ошибка при неверном пароле', async ({ page }) => {
  await page.goto(BASE);
  await page.getByTestId('email').fill(EMAIL);
  await page.getByTestId('password').fill(PASS_BAD);
  await page.getByTestId('login-btn').click();
  await expect(page.getByTestId('login-error')).toHaveText('Неверный логин или пароль');
});

test('Добавление новой задачи', async ({ page }) => {
  await page.goto(BASE);
  // логин
  await page.getByTestId('email').fill(EMAIL);
  await page.getByTestId('password').fill(PASS_OK);
  await page.getByTestId('login-btn').click();
  await expect(page.getByTestId('todo-app')).toBeVisible();

  // добавление
  const text = 'Купить молоко';
  await page.getByTestId('todo-input').fill(text);
  await page.getByTestId('todo-add').click();

  // проверка текста именно в span.title, не в кнопке
  await expect(page.getByTestId('todo-title').last()).toHaveText(text);
});

test('Удаление задачи', async ({ page }) => {
  await page.goto(BASE);
  // логин
  await page.getByTestId('email').fill(EMAIL);
  await page.getByTestId('password').fill(PASS_OK);
  await page.getByTestId('login-btn').click();
  await expect(page.getByTestId('todo-app')).toBeVisible();

  // добавляем задачу
  const text = 'Купить сыр';
  await page.getByTestId('todo-input').fill(text);
  await page.getByTestId('todo-add').click();
  await expect(page.getByTestId('todo-title').last()).toHaveText(text);

  // удаляем задачу (находим соответствующую кнопку внутри элемента с этим текстом)
  const item = page.getByTestId('todo-item').filter({ hasText: text });
  await item.getByTestId('todo-del').click();

  // проверяем, что задачи с таким текстом больше нет
  await expect(page.getByTestId('todo-item').filter({ hasText: text })).toHaveCount(0);
});
