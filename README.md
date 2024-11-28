# knowledgebase-with-pinecone

## 事前設定
- AWS認証情報の設定
  - [AWS CLIの設定と認証情報ファイルの設定](https://docs.aws.amazon.com/cli/latest/userguide/cli-configure-files.html)
- Bedrock モデルの有効化
  - [Amazon Bedrock 基盤モデルへのアクセスの追加または削除](https://docs.aws.amazon.com/ja_jp/bedrock/latest/userguide/model-access-modify.html)
- Pineconeのアカウント及びAPIキー作成
  - [APIキーを取得する](https://docs.pinecone.io/guides/get-started/quickstart#2-get-an-api-key) 
- createIndex.js
  - `YOUR_API_KEY`: PineconeのAPIキーを設定してください。
  - `example-index`: Pineconeのインデックス名を設定してください。

## セットアップ手順

1. リポジトリをクローンします。
   ```bash
   git clone https://github.com/sakai-classmethod/knowledgebase-with-pinecone.git
   cd knowledgebase-with-pinecone
   ```
2. 必要なパッケージをインストールします。
   ```bash
   bun install
   ```
3. `createIndex.js`を使用して、Pineconeインデックスを作成します。
   ```bash
   bun createIndex.js
   ```
4. Secrets Managerを作成します。
    ```bash
    aws secretsmanager create-secret --region <AWS:Region> --name PineconeSecret --secret-string "{\"apiKey\":\"YOUR_API_KEY\"}"
    ```
5. `template.yaml`を使用して、AWSリソースをデプロイします。
   ```bash
   rain deploy -r <AWS:Region> template.yaml knowledgebase-stack
   ```
