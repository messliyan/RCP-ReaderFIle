

import java.awt.Dimension;
import java.awt.Toolkit;
import java.io.BufferedReader;
import java.io.File;
import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.FileOutputStream;
import java.io.FileReader;
import java.io.IOException;
import java.io.InputStream;
import java.io.InputStreamReader;
import java.io.OutputStreamWriter;

/*
 * Label example snippet: create a label (a separator)
 *
 * For a list of all SWT example snippets see
 * http://www.eclipse.org/swt/snippets/
 */
import org.eclipse.swt.*;
import org.eclipse.swt.layout.*;
import org.eclipse.swt.widgets.*;
import org.eclipse.wb.swt.SWTResourceManager;
import org.eclipse.swt.custom.ScrolledComposite;
import org.eclipse.swt.events.SelectionEvent;
import org.eclipse.swt.events.SelectionListener;


public class Snippet37 {
	private static Text text;
	private static Text text2;
	private static Button button;
	private static String textTitle;
public static void main (String [] args) {
	Display display = new Display ();
	Shell shell = new Shell (display,SWT.ON_TOP|SWT.CLOSE | SWT.RESIZE | SWT.TITLE | SWT.RIGHT_TO_LEFT | SWT.PRIMARY_MODAL);
	shell.setAlpha(200);
	shell.setBackground(SWTResourceManager.getColor(255, 255, 225));
	shell.setLayout(new FillLayout(SWT.HORIZONTAL));

	text = new Text(shell, SWT.WRAP | SWT.H_SCROLL | SWT.V_SCROLL | SWT.CANCEL | SWT.CENTER | SWT.MULTI);
	text.setBackground(SWTResourceManager.getColor(SWT.COLOR_INFO_BACKGROUND));

	Dimension screenSize = Toolkit.getDefaultToolkit().getScreenSize();
	shell.setSize((int)(screenSize.width*0.2), (int)(screenSize.height*0.6));
	shell.open ();
	
	Shell shell2 = new Shell (display,SWT.ON_TOP |SWT.TITLE|SWT.RESIZE );
	shell2.setAlpha(200);
	shell2.setBackground(SWTResourceManager.getColor(255, 255, 225));
	shell2.setLayout(new RowLayout());
	text2 = new Text(shell2, SWT.SINGLE  | SWT.LEFT );
	text2.setLayoutData(new RowData((int)(screenSize.width*0.15), (int)(screenSize.height*0.6)));
	
	button=new Button(shell2, SWT.NONE);
	button.setText("GO");
	button.addSelectionListener(new SelectionListener() {
		
		@Override
		public void widgetSelected(SelectionEvent arg0) {
			// TODO 自动生成的方法存根
			String textstr=text2.getText().trim();
			text.setText(readFile(textstr));
			String[] ste1=textstr.split(".");
			
			shell.setText(textTitle);
			shell.redraw();
		}
		
		@Override
		public void widgetDefaultSelected(SelectionEvent arg0) {
			// TODO 自动生成的方法存根
			
		}
	});
	
	shell2.setSize((int)(screenSize.width*0.2), (int)(screenSize.height*0.06));
	shell2.setLocation(shell.getLocation().x, shell.getLocation().y-(int)(screenSize.height*0.05));
	shell2.open ();
	
	while (!shell.isDisposed ()) {
		if (!display.readAndDispatch ()) display.sleep ();
	}
	display.dispose ();
}

/**
 * 读入TXT文件
 * C:\\Users\\lijiabin\\Desktop\\英语\\英语5-13.txt
 */
public static String readFile(String path) {
    String pathname = path; // 绝对路径或相对路径都可以，写入文件时演示相对路径,读取以上路径的input.txt文件
    String str=readTxt(pathname);
    System.out.println(str);
    return str;
}

public static String textToString(File file) {
 
        StringBuilder result = new StringBuilder();
        try {
            BufferedReader br = new BufferedReader(new InputStreamReader(new FileInputStream(file),"gb2312"));// 构造一个BufferedReader类来读取文件
            String str = null;
            while ((str = br.readLine()) != null) {// 使用readLine方法，一次读一行
                result.append(System.lineSeparator() + str);
            }
            br.close();
        } catch (Exception e) {
            e.printStackTrace();
        }
        return result.toString();
    }
 
    /**
     * 解析普通文本文件  流式文件 如txt
     * @param path
     * @return
     */
    @SuppressWarnings("unused")
    public static String readTxt(String path){
        StringBuilder content = new StringBuilder("");
        try {
            String code = resolveCode(path);
            File file = new File(path);
            textTitle=file.getName();
            InputStream is = new FileInputStream(file);
            InputStreamReader isr = new InputStreamReader(is, code);
            BufferedReader br = new BufferedReader(isr);
            String str = "";
            while (null != (str = br.readLine())) {
            	content.append("\n");
                content.append(str);
            }
            br.close();
        } catch (Exception e) {
            e.printStackTrace();
            System.err.println("读取文件:" + path + "失败!");
        }
        return content.toString();
    }
 
 
 
    public static String resolveCode(String path) throws Exception {
//      [-76, -85, -71]  ANSI
//      [-2, -1, 79] unicode big endian
//      [-1, -2, 32]  unicode
//      [-17, -69, -65] UTF-8
        InputStream inputStream = new FileInputStream(path);
        byte[] head = new byte[3];
        inputStream.read(head);
        String code = "gb2312";  //或GBK
        if (head[0] == -1 && head[1] == -2 )
            code = "UTF-16";
        else if (head[0] == -2 && head[1] == -1 )
            code = "Unicode";
        else if(head[0]==-17 && head[1]==-69 && head[2] ==-65)
            code = "UTF-8";
 
        inputStream.close();
        System.out.println(code);
        return code;
    }

}