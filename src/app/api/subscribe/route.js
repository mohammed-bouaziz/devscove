import { google } from 'googleapis';
import { NextResponse } from 'next/server';

export async function POST(request) {
    const res = await request.json();
    const private_key = "-----BEGIN PRIVATE KEY-----\nMIIEvAIBADANBgkqhkiG9w0BAQEFAASCBKYwggSiAgEAAoIBAQC93Q83F3jzupMT\nUYfaRgogoaXwbbUjz1y+3A+N39k1nr838CUdk/pUsvPDK/Ypz6GhkurYrN0j3hrQ\nn09ON4tTf/mS8Sa9ot3Z7VqET26ZGb+Y1OTb8SW0HIrfdFd7Xp42gZnJVLiW3ZYv\nxlMqp7ugvuGxO234hPTTxmQQLJ9hcy/SHMyGFvp2g2m3fvrr5cOlKg+QGlzMKnUT\nwp48m5MsGN8jTDNfzB3S4eymmwLBmPMREGzOZogspCbL6LXxwWw5KTNyrXjG8jYW\nFYTv6v8wfT8AAD67VZAFN8WCIoXtJZxaB4UeL2FZsaoJIm7ZKzLi20fykLWUpBwo\nqD7FOBnXAgMBAAECggEAN99T2OyJZYAkQ+0cQ3mVBWFMieJfCfi93FS6JxAWxZa/\nwuBiq7+eTUqUPX00Zb16XSf1AGpucV2tGnOnTOc/kwT4FuvscKX7D2Sv3HvbmiZf\nocQUzTy70bMMkxGTpPSFLpkY/ox1/b+bsNd2JflSV82UcSmCBT5rJd8eFzxqcqyH\nNu0XIRgIQNaW0Hqq2uXW0mBqsVi+JAmQ5YY5BJdb+r1HIdPsWaK2V/fznDkK7KpX\nyeegiVLrC5EZ4OjQzgC6+stdMLB2brPARdOeUJdqow6dmuC3pED/zZRgo67arWLe\nQ3W8ofON+EKJ+LTojwHLp1HrSyvAC+KX7hxG++mEYQKBgQDjPRjAuhuakV8sGaQg\nkZ7Fi3Bdsa8U6GSVisDrceqzGilFJ8Haa+fhUq3V097Oo0RI0RyXZ+1jfUq2Aklb\nn1KT3t7PV5AH+wh1+ozBAsDuyUV4ax14k7jzIvEM97Y0cw6jGkOCRYvlnY23wj/Z\nyQxwrAKSnBNlg7KpEHtei6XZeQKBgQDV5PJxthCKtH6xiVchvs3wRCimdNicfLEg\ngnYGAhdQw5OrF1k0iPg6IQaeUhN6NVt7Vi5CZIrfTyo4MAjUskAAeQB0q8dAcAdk\nLaQpJnU7I4fw7pYfr/qk65DJQ9bgTPbvZUBHqYOMJNaHspqsldzwIIaI7381Qf6z\nCePNSzgJzwKBgHBNsJ8HGz9Pmw6LeY7TCPmuSRE1EEcv9w3k7iUuPoTXaBASbv7I\nl2fHWbw0oofTLpsiJZQ6O5sQv8yl4qVSXxhPbCRirP8UtIDCG7AD8V/RvvCdV4pQ\nz3XyDdmPzs+rEU/QWg7W2iXXsMNhT/cNIoXIrNjSI8/mv3RIfgAi2gtZAoGAUnRf\nwdYdqlrKPEZlgGy9ltGvmfuRRUIMRiwEs2w68Ld0RZBKoyXqCv6QPpgFSicnjPQ8\nAPwhTNSHwgFCZjwQ0B3VPyS5Ou3063lsvzBEIPghf4957903Ejx9JBkyzGTfDIpL\nrVR7kZrh2I3RcpaTBT6EnmU09KLsPLijSJCmmaECgYBZyjQ66xOuYp5U3A29EYML\nOOIF4qQzQtvTzzoUN96XeYf9GWNZyPyQJt3pLlxlcGtPhhC14mzc0W4RIc8hn4Us\noWzM7kkHZqjk06d5a+olY/6TIvQm6X2OKNZ2crGpKh++zXeb7UMbi043yF1yoc80\nCEfpmqV5WBCECRFEc8vlcQ==\n-----END PRIVATE KEY-----\n"; // Your private key here
    const good_key = private_key.replace(/\\n/g, '\n').trim();
    
    console.log(res);

    const auth = new google.auth.GoogleAuth({
        credentials: {
            client_email: "spread@ai-demis.iam.gserviceaccount.com",
            private_key: good_key
        },
        scopes: [
            'https://www.googleapis.com/auth/drive',
            'https://www.googleapis.com/auth/drive.file',
            'https://www.googleapis.com/auth/spreadsheets',
        ]
    });
    
    const sheets = google.sheets({
        auth,
        version: 'v4'
    });

    const response = await sheets.spreadsheets.values.append({
        spreadsheetId: "1jRkLU2Va4ERGPPKbVSulN8M-C7sqe4X1gDjKlLsTQ1A",
        range: 'A1',
        valueInputOption: 'USER_ENTERED',
        requestBody: {
            values: [
                [res.email]
            ]
        }
    });
    
    console.log(response);

    return NextResponse.json({ res });
}
